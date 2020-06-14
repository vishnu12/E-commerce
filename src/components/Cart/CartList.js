import React from 'react'
import CartItem from './CartItem'
const CartList = ({value}) => {

    const {cart}=value;
    console.log(cart)
  return (
    <div className="container-fluid">
       {cart.map(item=>{
           return <CartItem item={item} value={value}/>
       })}
      
    </div>
  )
}
export default CartList
