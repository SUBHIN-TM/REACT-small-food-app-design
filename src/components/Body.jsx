import CardContainers from "../components/CardContainers";
import resto  from "../utils/data";


  
  
  
const BodyContainer = () => {
    return (
      <div className="BodyContainer"> 
        <div>
        <button className="filter-button">Filter</button>
      </div>
      <div className="cardLook">
      {resto.map((restoData) => (
            <CardContainers key={restoData.info.id} restoDatas={restoData} />
          ))}
      </div>
    
     
      </div>
      
    );
  };

export default BodyContainer;