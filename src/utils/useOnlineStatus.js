import { useEffect,useState } from "react";

const useOnlineStatus =()=>{
    const [status,setStatus] =useState([])
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setStatus(false)
        });
        window.addEventListener("online",()=>{

        })

    },[]);

    return status
}

export default useOnlineStatus;