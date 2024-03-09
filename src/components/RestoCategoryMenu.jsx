import { useState } from "react";
import RestoCatList from "./RestoCatList";
const RestoCategoryMenu =({catInnerData})=>{
const [showList,setShowList] =useState(false)

    const toggle =()=>{
    showList? setShowList(false):setShowList(true)
    }
return (
    <div>
        {console.log(catInnerData)}
        <div className=" bg-gray-50 w-6/12 mx-auto shadow-lg my-1 p-4">
            <div  onClick={toggle} className=" cursor-pointer flex justify-between">
              <span className="font-bold ">{catInnerData?.title} ({catInnerData.itemCards.length})</span>
              <span >🔽</span>
            </div>
            <div className="">
                {/* {showList? ( <RestoCatList data={catInnerData.itemCards}/>):""}  ALSO WRITE AS THIS*/}
                { showList && ( <RestoCatList data={catInnerData.itemCards}/>) }
            </div>
          
        </div>
       
       
    </div>
)
}

export default RestoCategoryMenu;