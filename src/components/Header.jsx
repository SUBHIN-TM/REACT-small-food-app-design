import LOGO from "../utils/constants"
import { useState } from "react";

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
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <button className="LOGIN" onClick={()=> logStatus == 'Login' ? setlogStatus("Logout"):setlogStatus("Login")}>{logStatus}</button>
        </div>
      </div>
    );
  };

  export default  HeaderContainer ;