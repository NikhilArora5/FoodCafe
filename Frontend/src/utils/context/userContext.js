import { createContext } from "react";

const userContext=createContext({

    loggedInUser:"",
    isLoggedIn:false
})


export default userContext