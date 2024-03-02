import React from "react";
import ReactDOM from "react-dom/client";

const resto = [
  {
    info: {
      id: "7388274",
      name: "NOORIYA RESTAURANT",
      cloudinaryImageId: "2a710d9ce78a4842a4591476401ec804",
      locality: "Mattancherry",
      areaName: "Fort Kochi",
    }
  },

  {
    info: {
      id: "738827",
      name: "soubida RESTAURANT",
      cloudinaryImageId: "2a710d9ce78a4842a4591476401ec804",
      locality: "Kochi",
      areaName: " Kochi",
    }
  },

  {
    info: {
      id: "738828",
      name: "Babus RESTAURANT",
      cloudinaryImageId: "2a710d9ce78a4842a4591476401ec804",
      locality: "Kannur",
      areaName: "Fort Kochi",
    }
  },
];

const HeaderContainer = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img
          className="logoImg"
          src="https://tse3.mm.bing.net/th?id=OIP.GAQk2Ykay_6eZEa_vV1DaAHaHa&pid=Api&P=0&h=180"
        ></img>
      </div>
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

const color = {
  backgroundColor: "yellow",
};

const CardContainers = (prop) => {
   const {restoDatas}=prop;
   const{name,cloudinaryImageId,locality} = restoDatas.info
   console.log(restoDatas)
  return (
   
    <div className="cardBox" style={color}>
      <h4>{name}</h4>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <p>locallit{locality}</p>
    </div>
  );
};

const BodyContainer = () => {
  return (
    <div className="BodyContainer"> 
      {resto.map((restoData) => (
          <CardContainers key={restoData.info.id} restoDatas={restoData} />
        ))}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <HeaderContainer />
      <BodyContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
