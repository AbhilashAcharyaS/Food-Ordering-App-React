import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state,action)=>{           
            const updatedCart= state.items.filter(
                cartItem => cartItem.card.info.id != action.payload.card.info.id
            )
            state.items = updatedCart;

        },

        clearCart:(state,action)=>{
            state.items.length=0;
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
