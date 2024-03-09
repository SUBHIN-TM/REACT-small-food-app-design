import { IMAGEURL } from "../utils/constants";
const RestoCatList = ({ data }) => {
    return (
        <div>
            {data.map((list) => (
                <div key={list.card.info.id} className="border my-2 p-4 flex justify-between">
                    <div className="flex flex-col text-start">
                        <span>{list.card.info.name}</span>
                        <span className="mb-3">₹ {list.card.info.price ? list.card.info.price/ 100:list.card.info.defaultPrice/ 100}</span>
                        <p className="text-sm">{list.card.info.description}</p>
                    </div>
                    {list.card.info.imageId ? (
                        <div className="">
                            <img
                                className="w-32 h-28"
                                src={IMAGEURL + list.card.info.imageId}
                            />
                            <button className="bg-black text-xs  text-white p-1 px-2 rounded-lg" >ADD</button>
                        </div>
                    ):""}
                   
                </div>
            ))}

            {/* {console.log("catInside List", data)} */}
        </div>
    );
};
export default RestoCatList;
