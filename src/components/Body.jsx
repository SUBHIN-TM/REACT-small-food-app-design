import CardContainers from "../components/CardContainers";
import { useState,useEffect } from "react";
import resto  from "../utils/data";





  
  
  
const BodyContainer = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState(resto);
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const data =await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=9.91850&lng=76.25580")
        const jsonData =await data.json();
        // console.log(jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
        let modifiedData =jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants
        console.log(modifiedData)
        setListOfRestaurant(modifiedData)
    }


    return (
      <div className="BodyContainer"> 
        <div>
        <button className="filter-button" onClick={() => {
             let filtered=listOfRestaurants.filter((data) => data.info.price < 160)
             console.log(filtered)
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