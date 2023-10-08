import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/customHooks/useOnlineStatus";

import userContext from "../utils/context/userContext";

import { useContext } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userLogout } from "../Api/auth";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/slices/cartSlice";
import chefLogo from "../assets/chefLogo.png";
import foodcafe1 from "../assets/foodCafe1/0.png";
import { FaCartShopping } from "react-icons/fa6";

// common classes
let li = "mx-4";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser, isLoggedIn, setIsLoggedIn } = useContext(userContext);

  const { items, totalPrice, totalItems } = useSelector((store) => store.cart);
  let cartItems = items;

  useEffect(() => {
    // console.log("----useffect called after header------------")
  }, [loginBtn]);

  const onlineStatus = useOnlineStaus();
  const auth = async () => {
    let resData = await userLogout();
    // console.log("----------Logout 2222---",resData)
    // console.log("status--",resData.status)
    if (resData.status == 200) {
      // console.log("updating after logout")

      navigate("/login");
      dispatch(clearCart());
      setIsLoggedIn(false);
    }
  };
  return (
    <div className="header flex bg-pink-50 px-6 pt-4 pb-0 items-start justify-between">
      <div className="logo-container flex items-center justify-evenly">
        {/* <img className="logo w-[130px] rounded-lg" src= {LOGO_URL}/> */}
        <img className="logo w-[150px] rounded-lg" src={foodcafe1} />
      </div>

      <div className="nav-items text-lg mt-6">
        <ul className="flex items-center justify-evenly">
          {/* <li>Online Status :{onlineStatus?"✔️":"🔴"}</li> */}
          <li className={li}>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          {/* <li className={li}>  Restaurants  </li> */}
          <li className={li}>
            {" "}
            <Link to={"/about"}>About us</Link>{" "}
          </li>
          {/* <li className={li}> <Link to={"/contact"}>Contact</Link> </li> */}
          {/* <li className={li}> <Link to={"/grocery"}>Grocery</Link> </li> */}

          <div class="relative mb-2 mx-2 hover:cursor-pointer">
            <div class="t-0 absolute left-3">
              {totalItems?
              <p class="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {totalItems}
              </p>:""}
              
            </div>
            <Link to={"/cart"}>
              <FaCartShopping  className="mt-4 h-6 w-6"/>{" "}
            </Link>
          </div>

          {/* <div>
            <Link to={"/cart"}>
              <FaCartShopping />{" "}
            </Link>
            <div className="relative mb-10 mt-[-70px]">{totalItems}</div>
          </div> */}

          {isLoggedIn ? <li className={li}>{loggedInUser}</li> : ""}
          <button
            className="login-Btn bg-[#F5F5F5]  px-3 rounded-md"
            onClick={() => (isLoggedIn ? auth() : null)}
          >
            <Link to={isLoggedIn ? "/" : "/login"}>
              {" "}
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
