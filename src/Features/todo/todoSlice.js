import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[
        {id:1,
        text:'misael',}
    ]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
const todo={
    id:nanoid(),
    text:action.payload,
}
state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
          state.todos=  state.todos.filter((todo)=> 
            todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
           
           
  const todo = state.todos.find((todo) => todo.id === action.payload.id);
  console.log(action)
  todo.text = action.payload.text;
  return state;
          },
    },
});

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer