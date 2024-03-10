import { IMAGEURL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestoCatList = ({ data }) => {

    const dispatch=useDispatch();

    const dispatchAction=(item)=>{
       dispatch(addItem(item))  //IT WILL ADDTO ACTION.PAY LOAD
    }
    return (
        <div>
            {data.map((list) => (
                <div key={list.card.info.id} className="border my-2 p-4 flex justify-between">
                    <div className="flex flex-col text-start">
                        <span>{list.card.info.name}</span>
                        <span className="mb-3">₹ {list.card.info.price ? list.card.info.price/ 100:list.card.info.defaultPrice/ 100}</span>
                        <p className="text-sm">{list.card.info.description}</p>
                        <button onClick={()=> dispatchAction(list)} className="bg-black text-xs  text-white p-1 px-2 rounded-lg w-[50px] mt-2" >ADD</button>
                    </div>
                    {list.card.info.imageId ? (
                        <div className="">
                            <img
                                className="w-32 h-28"
                                src={IMAGEURL + list.card.info.imageId}
                            />
                            
                        </div>
                    ):""}


                   
                </div>
            ))}

            {/* {console.log("catInside List", data)} */}
        </div>
    );
};
export default RestoCatList;
