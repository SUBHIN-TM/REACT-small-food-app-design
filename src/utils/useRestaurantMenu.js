import {RestuantCardsURL} from "./constants"
import { useState,useEffect } from "react";

const useRestaurantMenu =(resId)=>{
    const [restoDetalis,setRestoDetails] =useState([])
    console.log("hook function reached");
  useEffect(() => {
    console.log("use effect called");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(RestuantCardsURL+resId );
      const json = await data.json();
      console.log("fetched json data",json.data);
      setRestoDetails(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  return restoDetalis;
}

export default useRestaurantMenu;