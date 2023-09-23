const express = require("express");
const router = express.Router();
const {createOrder,transactionCheck}=require("./controllers/createOrder")

router.post("/order", createOrder);
router.post("/transactionCheck", transactionCheck);

module.exports = router;
