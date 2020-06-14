import React from 'react'
import Title from '../Title'
import CartColumns from './CartCoulmns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../context'
import CartList from './CartList'
import CartTotal from './CartTotal'
const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {value=>{
          const { cart }=value;
          //console.log(cart)
          if(cart.length>0){
            return(<React.Fragment>

       <Title name="your" title="cart"/>
      <CartColumns/>
      <CartList value={value}/>
      <CartTotal value={value}/>
            </React.Fragment>)
          }else{
            return(
              <EmptyCart/>
            )
          }
        }}
      </ProductConsumer>
      
      
    </section>
  )
}
export default Cart
