import React, { useState } from 'react'
import {useDispatch} from  'react-redux'
import { addTodo, upadteTodo } from '../Features/todo/todoSlice'
import Todo from './Todo';
import { addCart } from '../Features/todo/cartSlice';
import Cart from './Cart';
function AddTodo() {
  const dispatch=useDispatch();
  const [input,setInput]=useState()
  const [cart,setCart]=useState();
  const todoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  const cartHandler=(e)=>{
    e.preventDefault()
    dispatch(addCart(cart))
    setCart('')
  }
  return (
    <div className='mt-8'>
<p className='text-center p-5 font-bold text-3xl'>Todo App <br></br><span className='text-lg text-gray-500'>with React redux toolkit and React js</span></p>
   
    <form onSubmit={todoHandler}>
    
      <input className='rounded-md text-white bg-gray-500 p-2 mx-2 place-items-end' type='text' value={input} placeholder='your name please!' onChange={(e)=>setInput(e.target.value)} />
<button className='rounded-md w-20 p-2 bg-green-800 text-white mx-2' type='submit' >Add</button>

    </form>
   
   <Todo input={input}/>
   <p className='text-center p-5 font-bold text-3xl'>Cart App <br></br><span className='text-lg text-gray-500'>with React redux toolkit and React js</span></p>
  
  

  <Cart input={cart}/>
    </div>
  )
}

export default AddTodo