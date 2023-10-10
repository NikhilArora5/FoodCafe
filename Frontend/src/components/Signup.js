import React from 'react'
import { useState } from "react";
import { userSignup } from "../Api/auth";
import { Navigate, useNavigate ,Link} from "react-router-dom";
import userContext from "../utils/context/userContext";
import { useContext } from "react";
import foodcafeLogin from "../assets/foodCafe1/editlogo.png";
const Signup = () => {
  
let navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPasword] = useState("");
  const [data, setData] = useState({});
  let { loggedInUser, setUserName, setIsLoggedIn } = useContext(userContext);

  const handleSubmit = async (e) => {
    // console.log("=========e",e)
    // setData({...data,[e.target.name]:e.target.value})
    e.preventDefault();
    // userSignup(data)
    let resData = await userLogin(data);
    console.log("resData", resData);

    if ((resData.status = 200)) {
      setUserName(resData.data.name);
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    // console.log("data", data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          
          Food Cafe
          <img className="w-[100px] mr-2 mb-3" src={foodcafeLogin} alt="logo"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create  your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  //  onChange={(e)=>(    setSearchText(e.target.value))}
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  name="password"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                            <input  aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div> */}
                  {/* <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div> */}
                  <div className="text-center">
                    <button
                      className="text-white bg-blue-400 p-2 px-4 rounded-md cursor-pointer mx-2"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Signup
                    </button>
                  </div>
                </div>
                
              </div>

             
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account ?  {" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-primary-600  dark:text-primary-500"
                >
                  <p>Login</p>
                  
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Signup
