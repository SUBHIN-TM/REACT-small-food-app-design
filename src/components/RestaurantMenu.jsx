import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"

const RestaurantMenu =()=>{
    const [restoDetalis,setRestoDetails] =useState([])

    useEffect(() =>{
    fetchMenu()
    },[])

 const fetchMenu =async ()=>{
    try {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.24792&lng=75.833154&restaurantId=85661&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json()
         console.log(json.data);
        setRestoDetails(json.data)
    } catch (error) {
        console.error(error);
    }
 };

  if(restoDetalis.length == 0){
    return( <Shimmer/>)
  }

 console.log("resto data",restoDetalis);

 return  (    
       <div>
            <h1>{restoDetalis?.cards[0]?.card?.card?.info?.name}</h1>
             <p></p>
            <h4>Menu</h4>
            <ul>
                <li>Biriyani</li>
                <li>Meal</li>
                <li>Burgers</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu