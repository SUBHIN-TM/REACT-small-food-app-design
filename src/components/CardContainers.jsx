
const CardContainers = (prop) => {
    const {restoDatas}=prop;
    const{name,cloudinaryImageId,locality,areaName,avgRating,cuisines} = restoDatas.info
    // console.log(restoDatas.info)
   return (
    
     <div className="cardBox border my-4 mx-7 p-5 h-[400px] bg-slate-100 rounded-lg hover:bg-slate-200 hover:border-slate-900" >
       <h4 className="mb-4 font-semibold ">{name}</h4>
       <img className="w-[200px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
       <p className="mt-4">Locallity : {locality}</p>
       <p>Area : {areaName}</p>
       <p>Rating : {avgRating}</p>
       {/* <p>Food Items  : {cuisines.map((data) => data).join(", ")}</p> */}
     </div>
   );
 };

export default CardContainers;