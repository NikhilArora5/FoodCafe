import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import userContext from "./utils/context/userContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import CartItem2 from "./components/CartItem2";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymetFailed from "./components/PaymetFailed";
import Signup from "./components/Signup";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // initialing hitting an api and getting user data
    let data = { name: "David" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={store}>
      <userContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
          isLoggedIn: isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <div className="root bg-[#F5F5F5]">
          <Header /><Outlet></Outlet>
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Page</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/demo",
        element: <Demo></Demo>,
      },
      {
        path: "/paymentsuccess",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/paymentFailed",
        element: <PaymetFailed></PaymetFailed>,
      },
      {
        path: "/cart2",
        element: <CartItem2 />,
      },
      {
        path: "/signup",
        element:<Signup/>
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
