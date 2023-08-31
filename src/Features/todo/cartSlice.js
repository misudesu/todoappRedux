import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  carts: [
    { id: 1, name: 'shu',price:10,Total:10,Quantity:1 },
  ],
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const cart = {
        id: nanoid(),
        text: action.payload,
      };
      state.carts.push(cart);
    },
    removeCart: (state, action) => {
        state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      },
    DcrementCart: (state, action) => {
     
        const { id, price,Quantity } = action.payload;
        const cart = state.carts.find((cart) => cart.id === id);
        cart.Quantity = --cart.Quantity;
       
        cart.Total=cart.Quantity*cart.price
        return state;
    },
    IncrementCart: (state, action) => {
      const { id, price,Quantity } = action.payload;
      const cart = state.carts.find((cart) => cart.id === id);
      cart.Quantity = ++cart.Quantity;
     
      cart.Total=cart.Quantity*cart.price
      return state;
    },
  },
});

export const { addCart, removeCart, updateCart,DcrementCart,IncrementCart } = cartSlice.actions;
export default cartSlice.reducer;
