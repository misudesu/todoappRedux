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
        {carts?.map((cart)=>(
             <div key={cart.id} className="flex flex-col gap-4 px-2 py-1 bg-slate-500  text-white max-w-60 ">
             <div className="flex justify-between items-center gap-4 px-2 py-1 border-b border-cyan-100 bg-slate-500 text-white">
               <h3>Cart</h3>
               <button
               onClick={()=>dispatch(removeCart(cart.id))}
                 type="button"
                 className="bg-red-800 px-2 py-1 rounded-md"
               >
                 Clear
               </button>
             </div>
             <ul>
               <li className="flex  gap-2 px-2 py-1">
                 <img className=' w-48 h-48 rounded-md' src="https://ae01.alicdn.com/kf/HTB1CQMlPVXXXXXRaFXXq6xXFXXXC/2017-New-Arrivals-Women-Tunic-Fashion-Blouse-Long-Sleeve-Blue-and-White-Striped-Embroidery-Shirts-Casual.jpg" alt="Product"/>
               <div>
               <p>Product {cart.name}</p>
                 <p>Quantity: {cart.Quantity}</p>
                 <p>Price: ${cart.price}</p>
               </div>
               </li>
             </ul>
             <div className="flex justify-end gap-5">
               <p>Total: ${cart.Total}</p>
             <div className='flex gap-5'>
             <button onClick={()=>dispatch(DcrementCart( {id:cart.id}))} className='bg-yellow-800 px-2 py-1 rounded-md'>-</button>
<button onClick={()=>dispatch(IncrementCart({id:cart.id}))} className='bg-red-800 px-2 py-1 rounded-md'>+</button>
             </div>
           </div>
       </div>
        ))}
    </ul>
</div>
  )
}

export default Cart