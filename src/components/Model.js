import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

const Model = () => {
  return (
    <ProductConsumer>
     {(value)=>{
          const {modelOpen,closeModel}=value;
          const {img,title,price}=value.modelProduct;  

          if(!modelOpen){
              return null
          }else{
              return (<ModelContainer>
<div className="container">
    <div className="row">
        <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
<h5>Item added to cart</h5>
<img src={img} className="image-fluid" alt=""/>
              <h5>{title}</h5>
              <h5 className="text-muted">Price : $ {price}</h5>
              <Link to='/'>
        <ButtonContainer onClick={closeModel}>
            Continue shopping
        </ButtonContainer>

              </Link>

              <Link to='/cart'>
        <ButtonContainer cart onClick={closeModel}>
           to cart
        </ButtonContainer>

              </Link>
        </div>
    </div>
</div>
              </ModelContainer>)
          }

     }

     }


    </ProductConsumer>
  )
}

const ModelContainer=styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#model{
    background: var(--mainWhite);
}
`;

export default Model
