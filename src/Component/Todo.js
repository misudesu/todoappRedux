import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todo/todoSlice';
function Todo(props) {
    const dispatch=useDispatch();
    const todos =useSelector(state=>state.todos)


  return (
    <div>
        
        <ul className='mt-5'>
            {todos.map((todo)=>(
            <li className='flex flex-col gap-4 px-2 py-1 bg-slate-500  text-white' key={todo.id} >
                <div className='flex justify-between items-center gap-4 px-2 py-1 border-b border-cyan-100 bg-slate-500 text-white'>

<p>{todo.text}</p>

<button onClick={()=>dispatch(updateTodo( {id:todo.id,text:props.input}))} className='bg-yellow-800 px-2 py-1 rounded-md'>Update</button>
<button onClick={()=>dispatch(removeTodo(todo.id))} className='bg-red-800 px-2 py-1 rounded-md'>Delete</button>
                </div>

            </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo