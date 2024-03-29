import {LOGO} from "../utils/constants"
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const HeaderContainer = () => {
  const [logStatus,setlogStatus] = useState("Login")
  const status=useOnlineStatus();
  const {loggedInUser}=useContext(userContext)
  // console.log(loggedInUser);
  //if want to update global
  const{setContextUpdate}=useContext(userContext)
  //  setContextUpdate("Guest") //AGAIN CHANGED THE VARIABLE,,THIS SET ADDED FROM APP.JS
  
  const cartRedux=useSelector((store) => store.cart.items) //give access to redux store
  console.log(cartRedux);
   //now we can acces store items things BY USING SELECTOR DATALAYED AND UL LAYER ARE SUBSCRIBED
    return (
      <div className="flex  justify-between	items-center mx-2 border-y-2">
        <div className="flex items-center	">
          <img
            className="w-20"
            src={LOGO}
          ></img>
          <p className="NAME font-bold ">Star Food</p>
        </div>
        <div className="navContainer">
          <ul className="flex justify-between mr-4 px-3 items-center">
          <li className="mr-6 hidden sm:block">
           Status {status ? "🟢" : "🔴"}  
              </li>
            <li className="mr-4 text-sm">
            <Link to="/">Home</Link>    
              </li>
            {/* <li className="mr-4 text-sm"> 
              <Link to="/about">About</Link>    
              </li> */}
            {/* <li className="mr-6 text-sm">
            <Link to="/contact">Contact</Link>    
            </li> */}
            <li  className="mr-4 text-sm"><Link to="/cart">Cart <b>({cartRedux.length} Items)</b></Link></li>
            <li className="mr-3 text-sm">
            <span className="mr-3"> <button className="text-sm bg-blue-200 hover:bg-blue-700 text-black font-bold p-1 px-4 rounded " onClick={()=> logStatus == 'Login' ? setlogStatus("Logout"):setlogStatus("Login")}>{logStatus}</button></span>
            </li>
            <li>{logStatus !== "Login"?loggedInUser:"" }</li>
          </ul>
       
        </div>
      </div>
    );
  };

  export default  HeaderContainer ;