import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todo/todoSlice';
function Todo(props) {
    const dispatch=useDispatch();
    const todos =useSelector(state=>state.todos)
    const [text, setNewText] = useState('');

  return (
    <div>
        
        <ul className='mt-5'>
            {todos.map((todo)=>(
            <li className='flex flex-col gap-4 px-2 py-1 bg-slate-500  text-white' key={todo.id} >
                <div className='flex justify-between items-center gap-4 px-2 py-1 border-b border-cyan-100 bg-slate-500 text-white'>

<p>{todo.text}</p>
<input className='text-black' type="text" value={text} onChange={(e)=>setNewText(e.target.value)} />
<button onClick={()=>dispatch(removeTodo(todo.id))} className='bg-red-800 px-2 py-1 rounded-md'>Delete</button>
<button onClick={()=>dispatch(updateTodo( {id:todo.id,text:text}))} className='bg-red-800 px-2 py-1 rounded-md'>Update</button>
                </div>

            </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo