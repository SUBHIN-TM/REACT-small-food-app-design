import CardContainers,{TopRatedCardContainers} from "../components/CardContainers";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; //FAKE CARDS FOR REPLACING LOADING
import { Link } from "react-router-dom";

const BodyContainer = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]); //IT WILL COME UP THE FETCHED ENTIRE DATA
  const [searchText, setSearchText] = useState(""); //WHILE SEARCH THE SEARCH TEXT WILL MODIFIY IN THIS
  const [searchTextFilteredDatabase, setsearchTextFilteredDatabase] = useState(
    []
  ); //MAKE ANOTHER COPY TO STORE INITILAY THE WHOLE SAME DATA OF RESTURNT,LATER THIS WILL FILLED WITH SEARCHRD TEXT MATACHED DATAS
  //DONT INTERFERE THE MAIN RESTO DATAS BCZ,WHILE SEARAH CHNGING THE MAIN DATA TO RENDRE IS A BAD IDEA.INSTEDAD WE HAVE TO SEARCH THE ELEMTN IN FROM THE MAIN DATAS OTHER WISE IT CANT GET FROM SECOND SEARCH
  
  const NewTopRatedContainers=TopRatedCardContainers(CardContainers) //HIGHER ORDER COMPONENT ,THE ARGUMENT IS CARDCONTAINER COMPONENT ,

  useEffect(() => {
    //*WHENEVER THE THIS COMPONENTS RENDERED THE USEEFFECT WILL WORK AND FETCH CALLED
    fetchData();
  }, []); //WITH DEPENDENCY ARRY IT WIL CALL ONLY INITIAL RENDER
  //WITH OUT PUTING ARRAY AS DEPENDENCY IT WIL CALL EVERY TIME COMPONENT RENDER
  //IF ANY COMPONENT PUT INSIDE ARRAY THEN WHENEVER COMPONENT UPDATED THIS USEEFFECT WILL BE CALLED

  const fetchData = async () => {
    //IT WIL FETCH THE ENTIRE DATA TO RENDER
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      // console.log(jsonData)
      let modifiedData =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log(modifiedData.map((data) => data.info))
      setListOfRestaurant(modifiedData); //SAVED IN MAIN DATA
      setsearchTextFilteredDatabase(modifiedData); //SAME DATA SAVED IN THE FILTER DATA BASE TO RENDRE INITILLY ALL DATA SHOULD BE NEEDED
    } catch (error) {
      console.error(error);
    }
  };

  if (listOfRestaurants.length == 0) {
    return <Shimmer />; //CALLED SHIMMER TO RENDRE FAKE CARDS
  }

  // console.log("resto",listOfRestaurants);
  return (
    <div className="BodyContainer mt-3">
      <div className="flex ml-6 mb-7">
        <button
          className="border mr-9 px-3 bg-stone-300 rounded"
          onClick={() => {
            let filtered = listOfRestaurants.filter(
              (data) => data.info.avgRating >= 4.4
            );
            // console.log("filtered", filtered);
            setsearchTextFilteredDatabase(filtered); //AVG RATING DATAS ONLY REPLED BY THE MAIN DATA
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            className="border mr-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="bg-stone-300 px-3 py-1 rounded"
            onClick={() => {
              const filterText = listOfRestaurants.filter((data) =>
                data.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ); //DATA WILL BE FINDED WRT THE SEARCH TEXT
              // console.log(filterText);
              setsearchTextFilteredDatabase(filterText); //PUT THE DDATA AND REPLCED THE DATABSE OF FILTERD
            }}
          >
            Serach
          </button>
        </div>
      </div>
    
      <div className="grid grid-cols-1 p-[5px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" >
        {searchTextFilteredDatabase.map((restoData //ALWAYS FILTERED DATA BASE DATA WILL BE RENDERED MAIN DATA BASE WILL NOT BE REPLACED BY  SEACH ,AND NEED TO TAKE ALL OPERTION IN MAIN DATABSE WIHHOUT EXCLUDE SINGLE DATA
          ) => (
            <Link key={restoData.info.id}to={"/restaurant/" + restoData.info.id}>
              {restoData.info.avgRating >= 4.4 ?(<NewTopRatedContainers restoDatas={restoData}/>) :( <CardContainers restoDatas={restoData} />)}
             
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BodyContainer;
