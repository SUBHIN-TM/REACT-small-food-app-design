import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({ //created slice
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{ //dispatch action is ADDitem, REDUCER FUNCTION IS THE FUNCTION WRITED IN IT
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length = 0;

            //OR WE CAN WRITE CLESAR LIKE THIS
            // return {items:[]}
        }
    }
}); 

export const {addItem,removeItem,clearCart}=cartSlice.actions  //EXPORTED ACTIONS
export default cartSlice.reducer ;