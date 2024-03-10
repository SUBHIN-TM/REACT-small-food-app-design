import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer from "./components/Header";
import BodyContainer from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";





const AppLayout = () => {
  [contextUpdate,setContextUpdate]=useState("Guest Mode")


//   return (
//     <userContext.Provider value={{loggedInUser:contextUpdate,setContextUpdate}}>
//       <div className="appLayout">
//         <HeaderContainer />
//         <Outlet />
//       </div>
//     </userContext.Provider>
//   );
// };


return (
  <Provider store={reduxStore}>
      <userContext.Provider value={{loggedInUser:contextUpdate,setContextUpdate}}>
    <div className="appLayout">
      <HeaderContainer />
      <Outlet />
    </div>
  </userContext.Provider>
  </Provider>

);
};



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyContainer />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
