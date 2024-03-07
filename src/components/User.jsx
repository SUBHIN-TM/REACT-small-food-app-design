 import { useState } from "react";

const User = (props)=>{
    let [count,setCount] =useState(0)
    return(
        <div>
            <h4>PLACE : KOZHIKODE</h4>
            <h3>Kerala</h3>
            <p>Method : {props.method}</p>
            <p>use state use : {count}</p>
            <button onClick={()=>{
                setCount(count + 1)
            }}>count increse</button>
        </div>
    )
}

export default User;