import CardContainers from "../components/CardContainers";
import { useState,useEffect } from "react";
// import resto  from "../utils/data";
import Shimmer from "./Shimmer";




  
  
  
const BodyContainer = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
      try {
        // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
      //  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData =await data.json();
          // console.log(jsonData)
        //  console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        let modifiedData =jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(modifiedData.map((data) => data.info))
        setListOfRestaurant(modifiedData)
      } catch (error) {
        console.error(error)
      }
        
    }

 if(listOfRestaurants.length == 0){
  return (<Shimmer/>)
 }
    return (
      <div className="BodyContainer"> 
        <div>
        <button className="filter-button" onClick={() => {
             let filtered=listOfRestaurants.filter((data) => data.info.price < 160)
            //  console.log(filtered)
             setListOfRestaurant(filtered)
        }}>Filter Food less than 160 rs</button>
      </div>
      <div className="cardLook">
      {listOfRestaurants.map((restoData) => (
            <CardContainers key={restoData.info.id} restoDatas={restoData} />
          ))}
      </div>
    
     
      </div>
      
    );
  };

export default BodyContainer;