import {LOGO} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderContainer = () => {
  const [logStatus,setlogStatus] = useState("Login")
  const status=useOnlineStatus();
    return (
      <div className="flex  justify-between	items-center mx-2 border-y-2">
        <div className="flex items-center	">
          <img
            className="w-20"
            src={LOGO}
          ></img>
          <p className="NAME font-semibold">Star Food</p>
        </div>
        <div className="navContainer">
          <ul className="flex justify-between mr-4 px-3 items-center">
          <li className="mr-6">
           Status {status ? "🟢" : "🔴"}  
              </li>
            <li className="mr-4">
            <Link to="/">HOME</Link>    
              </li>
            <li className="mr-4">PRODUCTS</li>
            <li className="mr-4"> 
              <Link to="/about">ABOUT</Link>    
              </li>
            <li className="mr-6">
            <Link to="/contact">CONTACT</Link>    
            </li>
            <li className="mr-3">
            <span className="mr-3"> <button className="bg-blue-200 hover:bg-blue-700 text-black font-bold p-1 px-4 rounded " onClick={()=> logStatus == 'Login' ? setlogStatus("Logout"):setlogStatus("Login")}>{logStatus}</button></span>
            </li>
          </ul>
       
        </div>
      </div>
    );
  };

  export default  HeaderContainer ;