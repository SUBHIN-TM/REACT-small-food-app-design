import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./components/Header";
import BodyContainer from "./components/Body";







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
