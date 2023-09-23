import { useRouteError } from "react-router-dom"

const Error=()=>{

    const err=useRouteError();
    // console.log("------------ERROR",err)
    return(
<>
        <div>
            {err.status}  {err.statusText}
        </div>

        <h2>oops!! {err.message}</h2>
        
</>
       
    )
}

export default Error