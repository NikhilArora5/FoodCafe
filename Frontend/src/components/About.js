import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import UserClass from './UserClass'
import { Component } from 'react'
import UserFunc from './userFunc'
class About extends Component{

  constructor(props){

    super(props)

    // console.log("Parent Contructour called")
  }
  
  componentDidMount(){

    // console.log("Parent component Did Mount")
}

  render(){
    // console.log("Parent Rendering  called")
    return (
      <div>
        {/* <h1>AboutCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCaaaaaaaaaaaaaaa class comp Page...........kkkkkkkk...</h1> */}
  
      <UserClass name={"First "} />
      {/* <UserFunc/> */}
      </div>
    )
  }
} 



export default About
