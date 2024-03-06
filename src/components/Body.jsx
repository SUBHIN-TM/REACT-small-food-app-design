import CardContainers from "../components/CardContainers";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"; //FAKE CARDS FOR REPLACING LOADING




  
  
  
const BodyContainer = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([]); //IT WILL COME UP THE FETCHED ENTIRE DATA
    const [searchText,setSearchText] =useState("")  //WHILE SEARCH THE SEARCH TEXT WILL MODIFIY IN THIS
    const [searchTextFilteredDatabase,setsearchTextFilteredDatabase] =useState([]) //MAKE ANOTHER COPY TO STORE INITILAY THE WHOLE SAME DATA OF RESTURNT,LATER THIS WILL FILLED WITH SEARCHRD TEXT MATACHED DATAS
                                                           //DONT INTERFERE THE MAIN RESTO DATAS BCZ,WHILE SEARAH CHNGING THE MAIN DATA TO RENDRE IS A BAD IDEA.INSTEDAD WE HAVE TO SEARCH THE ELEMTN IN FROM THE MAIN DATAS OTHER WISE IT CANT GET FROM SECOND SEARCH
    useEffect(() => {  //*WHENEVER THE THIS COMPONENTS RENDERED THE USEEFFECT WILL WORK AND FETCH CALLED
        fetchData()
    },[]);

    const fetchData = async () => { //IT WIL FETCH THE ENTIRE DATA TO RENDER
      try {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData =await data.json();
          // console.log(jsonData)
        let modifiedData =jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(modifiedData.map((data) => data.info))
        setListOfRestaurant(modifiedData) //SAVED IN MAIN DATA
        setsearchTextFilteredDatabase(modifiedData) //SAME DATA SAVED IN THE FILTER DATA BASE TO RENDRE INITILLY ALL DATA SHOULD BE NEEDED
      } catch (error) {
        console.error(error)
      } 
    }

 if(listOfRestaurants.length == 0){
  return (<Shimmer/>) //CALLED SHIMMER TO RENDRE FAKE CARDS
 }
    return (
      <div className="BodyContainer"> 
        <div className="upper-body">
        <button className="filter-button" onClick={() => {
             let filtered=listOfRestaurants.filter((data) => data.info.avgRating >= 4.4)
              console.log("filtered",filtered)
              setsearchTextFilteredDatabase(filtered) //AVG RATING DATAS ONLY REPLED BY THE MAIN DATA
        }}>Top Rated Restaurants</button>
        <div>
           <input value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>  
           <button onClick={() => {
            const filterText=listOfRestaurants.filter((data) => data.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())) //DATA WILL BE FINDED WRT THE SEARCH TEXT
            console.log(filterText); 
            setsearchTextFilteredDatabase(filterText)  //PUT THE DDATA AND REPLCED THE DATABSE OF FILTERD
           }}>Serach</button>
        </div>
      </div>
      <div className="cardLook">
      {searchTextFilteredDatabase.map((restoData) => ( //ALWAYS FILTERED DATA BASE DATA WILL BE RENDERED MAIN DATA BASE WILL NOT BE REPLACED BY  SEACH ,AND NEED TO TAKE ALL OPERTION IN MAIN DATABSE WIHHOUT EXCLUDE SINGLE DATA
            <CardContainers key={restoData.info.id} restoDatas={restoData} />
          ))}
      </div>
      </div>
      
    );
  };

export default BodyContainer;