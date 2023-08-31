import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { DcrementCart, IncrementCart, removeCart, updateCart } from '../Features/todo/cartSlice';
function Cart(props) {
    const dispatch=useDispatch();
    const carts=useSelector(state=>state.cart.carts)
  return (
    <div>
    {/* end  */}
    <ul className='mt-5'>
        {carts?.map((cart,index)=>(
             <div class="flex flex-col gap-4 px-2 py-1 bg-slate-500  text-white">
             <div class="flex justify-between items-center gap-4 px-2 py-1 border-b border-cyan-100 bg-slate-500 text-white">
               <h3>Cart</h3>
               <button
                 type="button"
                 class="bg-red-800 px-2 py-1 rounded-md"
               >
                 Clear
               </button>
             </div>
             <ul>
               <li class="flex flex-col gap-4 px-2 py-1">
                 <img src="https://dummyimage.com/100x100" alt="Product" class="w-full rounded"/>
                 <p>Product {cart.name}</p>
                 <p>Quantity: {cart.Quantity}</p>
                 <p>Price: ${cart.price}</p>
               </li>
             </ul>
             <div class="flex justify-end">
               <p>Total: ${cart.Total}</p>
             </div>
             <div className='flex gap-5'>
             <button onClick={()=>dispatch(DcrementCart( {id:cart.id}))} className='bg-yellow-800 px-2 py-1 rounded-md'>-</button>
<button onClick={()=>dispatch(IncrementCart({id:cart.id}))} className='bg-red-800 px-2 py-1 rounded-md'>+</button>
             </div>
           </div>
       
        ))}
    </ul>
</div>
  )
}

export default Cart