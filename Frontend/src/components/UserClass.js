import React from "react"
import userContext from "../utils/context/userContext"

class UserClass extends React.Component{

    constructor(props){

        super(props)

       
        this.state={
            userInfo:{
                login:"Dummy Name",
                avatar_url:""
            }
        }

        //  console.log( "Contructour called")
    }

   async componentDidMount(){

        console.log(" component Did Mount ---------Api hits we get Data and we update state")
        const data= await fetch(" https://api.github.com/users/NikhilArora5")

        let json=await data.json()
        // console.log("JSON USER API",json)

        if(json) this.setState({userInfo:json})

        this.timer=setInterval(()=>{
            // console.log(" user comp Interval ")
        },1000)
    }
   

    async componentDidUpdate(prevProps,prevState){
        if(this.state.userInfo!==prevState.userInfo){

            
        }
        // console.log(" component Did update called")
    }

  async  componentWillUnmount(){

        // console.log("User  comp will unmount")
        clearInterval(this.timer)
    }

    render(){
        //  console.log(this.props.name+"Child Rendering  called")
        const {avatar_url,login,html_url}=this.state.userInfo
        if(!login){
            //   console.log("component Rendering  called with Dummy Data State>>>",this.state.userInfo)
        }else{
            // console.log("component Rendering  called with Updated Data State>>>",this.state.userInfo)
        }

        return (

            <div className="user-card">
              {/* <img src={avatar_url}/> */}
                <h2>{login}</h2>
                <a target="_blank" href={html_url} > Github  </a>


                <userContext.Consumer>

                    {(contextData)=>(
                        
                        console.log("--------context Data",contextData)

                        
                    )}
                </userContext.Consumer>

                
               
                

            </div>
        )
    }

}

export default UserClass