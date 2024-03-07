import {LOGO} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderContainer = () => {
  const [logStatus,setlogStatus] = useState("Login")
    return (
      <div className="headerContainer">
        <div className="logo">
          <img
            className="logoImg"
            src={LOGO}
          ></img>
          <p className="NAME">Star Food</p>
        </div>
        <div className="navContainer">
          <ul className="lists">
            <li>
            <Link to="/">HOME</Link>    
              </li>
            <li>PRODUCTS</li>
            <li> 
              <Link to="/about">ABOUT</Link>    
              </li>
            <li>
            <Link to="/contact">CONTACT</Link>    
            </li>
          </ul>
          <button className="LOGIN" onClick={()=> logStatus == 'Login' ? setlogStatus("Logout"):setlogStatus("Login")}>{logStatus}</button>
        </div>
      </div>
    );
  };

  export default  HeaderContainer ;