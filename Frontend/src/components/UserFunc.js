import React from 'react'
import { useEffect } from 'react'

const UserFunc = () => {

    useEffect(()=>{
        console.log("useEffect func comp")
        let timer=setInterval(()=>{
            console.log("user Functional comp interval")
        },1000)


        return()=>{
            console.log("----------------------Cleaning up userFUnc component")
            clearInterval(timer)
        }
    })
    console.log("Renedering---------------")
  return (

  
    <div>uFUNC</div>
  )
}

export default UserFunc