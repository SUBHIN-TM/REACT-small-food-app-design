import { useState } from "react";

const User = (props)=>{
    const [usestate] =useState(0)
    return(
        <div>
            <h4>PLACE : KOZHIKODE</h4>
            <h3>Kerala</h3>
            <p>Method : {props.method}</p>
            <p>use state use : {usestate}</p>
        </div>
    )
}

export default User;