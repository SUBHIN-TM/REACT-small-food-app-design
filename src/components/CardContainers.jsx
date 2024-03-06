const color = {
    backgroundColor: "yellow",
  };
  
  

const CardContainers = (prop) => {
    const {restoDatas}=prop;
    const{name,cloudinaryImageId,locality,areaName,avgRating,cuisines} = restoDatas.info
    console.log(restoDatas.info)
   return (
    
     <div className="cardBox" style={color}>
       <h4>{name}</h4>
       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
       <p>Locallity : {locality}</p>
       <p>Area : {areaName}</p>
       <p>Rating : {avgRating}</p>
       <p>Food Items  : {cuisines}</p>



       
     </div>
   );
 };

export default CardContainers;