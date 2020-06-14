import React,{useState} from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from './context'
const Productlist = () => {

  //const [product,setProduct]=useState(storeProducts);

  return (
    <React.Fragment>
<div className="py-5">
  <div className="container">
<Title name="our" title="products"/>
    <div className="row">
<ProductConsumer>
  {value=>{
    return value.product.map((product,k)=>{
      return <Product key={value.product.id} product={product}/>
    })
    
  }}
</ProductConsumer>
    </div>
  </div>
</div>

    </React.Fragment>
  )
}
export default Productlist