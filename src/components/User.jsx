 import { useState,useEffect } from "react";

const User = (props)=>{
    let [count,setCount] =useState(0)

    useEffect(() =>{
       const interval= setInterval(()=>{
         console.log("interval");
        },1000)

        return ()=>{   //THIS WWILL WORK AS WILL UNMOUNT ,WE CAN WRITE INSIFE THIS ,IT WIL EXECUTE AFTER PAGE LEAVES OR DISPEERRED OR REMVED
            clearInterval(interval)
        }

    },[])

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