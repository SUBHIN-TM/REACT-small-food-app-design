import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu" //CUSTO HOOK
import RestoCategoryMenu from "./RestoCategoryMenu";

const RestaurantMenu = () => {

  const{resId} =useParams() //EXTRACTED PARM TO GET RESTORNT ID BY PARM HOOK
  console.log("rest id is",resId);
  const restoDetalis=useRestaurantMenu(resId)  //CREATED A CUTOMIZE HOOK TO RETURN RESTO DETAILS FOR THE CURRNT PARAM ID
  console.log("RESTUARNT DETAILS THAT RETURN FROM CUSTOM HOOK",restoDetalis);

  if (restoDetalis.length == 0) {
    return <Shimmer />;
  }

  console.log("resto data", restoDetalis);
  console.log( restoDetalis?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  
  const category=restoDetalis?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((data) => data.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(category);
  return (
    <div className="text-center ">
      <h1 className="font-bold text-xl my-1 mt-3">{restoDetalis?.cards[0]?.card?.card?.info?.name}</h1>
      <p className="mb-5">{restoDetalis?.cards[0]?.card?.card?.info?.city}</p>
      {category.map((data) =>{
        return(
          <RestoCategoryMenu key={data?.card?.card?.title}  catInnerData={data?.card?.card}/>
        )
      })}
   
    </div>
  );
};

export default RestaurantMenu;
