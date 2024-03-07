import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {RestuantCardsURL} from "../utils/constants"

const RestaurantMenu = () => {
  const [restoDetalis, setRestoDetails] = useState([]);
  const{resId} =useParams()
  console.log("rest id is",resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(RestuantCardsURL+resId );
      const json = await data.json();
      console.log(json.data);
      setRestoDetails(json.data);
    } catch (error) {
      console.error(error);
    }
  };

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
