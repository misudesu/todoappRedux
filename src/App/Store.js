import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/todo/todoSlice'
import cartReducer from '../Features/todo/cartSlice'
import todoSlice from "../Features/todo/todoSlice";
export const store =configureStore({
    reducer: combineReducers({
        todo: todoReducer,
        cart: cartReducer,
      }),
})

