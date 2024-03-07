import { useRouteError } from "react-router-dom" //it will gather the router error and we can use and modify the error page

const Error =()=>{
    const error=useRouteError() //now it will contain the all details of error
    console.log(error);
    return (
        <div>
            <h1>OOPS.....</h1>
            <h4>{error.data}</h4>
            <h4>{error.status}</h4>
            <h4>{error.statusText}</h4>
        </div>
    )
}

export default Error