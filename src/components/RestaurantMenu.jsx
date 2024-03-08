import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu" //CUSTO HOOK

const RestaurantMenu = () => {

  const{resId} =useParams() //EXTRACTED PARM TO GET RESTORNT ID BY PARM HOOK
  console.log("rest id is",resId);
  const restoDetalis=useRestaurantMenu(resId)  //CREATED A CUTOMIZE HOOK TO RETURN RESTO DETAILS FOR THE CURRNT PARAM ID
  console.log("RESTUARNT DETAILS THAT RETURN FROM CUSTOM HOOK",restoDetalis);

  if (restoDetalis.length == 0) {
    return <Shimmer />;
  }

  console.log("resto data", restoDetalis);
  const { itemCards } =
    restoDetalis?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards)
  return (
    <div>
      <h1>{restoDetalis?.cards[0]?.card?.card?.info?.name}</h1>
      <p>{restoDetalis?.cards[0]?.card?.card?.info?.city}</p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((resto) => (
          <li key={resto.card.info.id}>{resto.card.info.name}</li>
         

        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
