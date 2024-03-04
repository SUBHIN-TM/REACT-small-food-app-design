const color = {
    backgroundColor: "yellow",
  };
  
  

const CardContainers = (prop) => {
    const {restoDatas}=prop;
    const{name,cloudinaryImageId,locality} = restoDatas.info
    console.log(restoDatas)
   return (
    
     <div className="cardBox" style={color}>
       <h4>{name}</h4>
       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
       <p>locallity : {locality}</p>
       
     </div>
   );
 };

export default CardContainers;