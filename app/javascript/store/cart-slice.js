import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += state.totalQuantity + state.enteredAmount;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.name,
          price: newItem.price,
          quantity: newItem.enteredAmount,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += existingItem.quantity + existingItem.enteredAmount;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
