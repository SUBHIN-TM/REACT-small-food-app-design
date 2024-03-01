import React from "react";
import ReactDOM  from "react-dom/client";





const HeaderContainer=() => {
    return (
     <div className="headerContainer">
        <div className="logo"><img className="logoImg" src="https://tse3.mm.bing.net/th?id=OIP.GAQk2Ykay_6eZEa_vV1DaAHaHa&pid=Api&P=0&h=180"></img></div>
        <div className="navContainer">
            <ul className="lists">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
     </div>
    );
};

const color ={
    backgroundColor:"yellow"
};

const CardContainers = ()=> {
    return (
      <div className="cardBox" style={color}>
        <h4>Sudhakaran Hotel</h4>
        <img src="https://tse3.mm.bing.net/th?id=OIP.p0KaOpfzw_8WAXPvNKhmhwHaHa&pid=Api&P=0&h=180"></img>
        <p>Biriyani</p>
        <p>RS:150</p>
        <small>* * * * *</small>

      </div>
    )
}


const BodyContainer=() => {
    return (
     <div className="BodyContainer">
        <div><CardContainers/></div>
        <div><CardContainers/></div> 
        <div><CardContainers/></div>
        <div><CardContainers/></div>
        <div><CardContainers/></div>
       
     </div>
    );
};

 

const AppLayout=() => {
    return(
        <div className="appLayout">
         <HeaderContainer/>
         <BodyContainer/>
        </div>
    );
}

 const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(<AppLayout/>) 