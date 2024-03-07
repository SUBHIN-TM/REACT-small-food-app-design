import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./components/Header";
import BodyContainer from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";






const AppLayout = () => {
  return (
    <div className="appLayout">
      <HeaderContainer />
      <BodyContainer />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {path:'/',element:<AppLayout/>,errorElement:<Error/>},
  {path:"/about",element:<About/>}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
