import { useDispatch, useSelector } from "react-redux";
import RestoCatList from "./RestoCatList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
 const dispatch=useDispatch();
 const clearStore =()=>{
    dispatch(clearCart())
 }
 
  return (
    <div>
        <div className="flex justify-center">
            <button onClick={()=> clearStore()} className="p-1 text-sm text-center shadow-sm border-4 border-black mt-2 rounded-lg">Clear Cart</button>
        </div>
       {cartItems.length ==0 && <p className="mt-1 text-center"> <i>Please Add Items To The Cart</i></p>}
      <div className="w-7/12 ml-4 mb-4 rounded-lg border-black">
        <RestoCatList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
