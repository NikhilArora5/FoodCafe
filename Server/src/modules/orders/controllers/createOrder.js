const { razorPay_instance } = require("../../../utils/payment");
const crypto = require("crypto");
// const { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
const product = require("../../../model/product");
const order = require("../../../model/order");

const createOrder = async (req, res) => {
  try {
    let { amount, items } = req.body;
    console.log("---body-----------", req.body);

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
    };

    let orderObj = {
      items,
      amount,
      transaction: {
        gateway: "razorPay",
        success: false,
      },
    };
    const myOrder = await razorPay_instance.orders.create(options);

    let dbOrder = await order.create(orderObj);
    let orderId = dbOrder._id;

    if (myOrder) {
      return res.status(200).json({
        data: { ...myOrder, orderId },
        status: 200,
        message: "order success",
      });
    } else {
      return res.status(400).json({
        data: {},
        status: 400,
        message: "order failed",
      });
    }
  } catch (error) {
    console.log("----ERORRR", error.message);
    return res.status(400).json({
      data: {},
      status: 400,
      message: "something went wrong",
    });
  }
};

const transactionCheck = async (req, res) => {
  try {
    let { razorpay_payment_id, razorpay_order_id, razorpay_signature } =req.body;
    // console.log("===========REQ>BODY", req.body);
    // console.log("===========REQparama", req.query);

    let { razorPay_id, orderId } = req.query;
    // console.log(
    //   "===============from params",
    //   razorPay_id,
    //   orderId,
    //   process.env.RAZORPAY_SECRET
    // );

    // const body = razorPay_id + "|" + razorpay_payment_id;
    const body = orderId + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
      let transaction = {
        success: true,
        gateway: "razorpay",
        gatewayOrder: razorPay_id,
        payment_id: razorpay_payment_id,
      };

      let updateOrder = await order.findByIdAndUpdate(
        { _id: orderId },
        {
          $set: {
            transaction,
            isPaid: true,
          },
        },
        {new: true}
      ).lean();

      // console.log("----update---------", updateOrder.transaction.success);
      if (updateOrder.transaction.success) {
        res.redirect(
          `http://localhost:1234/paymentsuccess?reference=${razorpay_payment_id}`
        );
      }else{
        res.redirect(
            `http://localhost:1234/paymentFailed"`
          );
      }
    }

    
  } catch (error) {
    console.log("-----------error", error.message);
    res.redirect(
        `http://localhost:1234/paymentFailed"`
      );
    return res.status(200).json({
      status: 200,
      message: error.message,
    });
  }
};

module.exports={
    createOrder,
    transactionCheck
}