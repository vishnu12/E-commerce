import React,{createContext,useState,useEffect} from 'react'
import {storeProducts,detailProduct} from '../data'

const ProductContext=createContext();

const ProductProvider = (props) => {

    const[product,setProduct]=useState([]);
    const [detail,setDetail]=useState(detailProduct);
    const [cart,setCart]=useState([])
    const [modelOpen,setModelOpen]=useState(false)
    const [modelProduct,setModelProduct]=useState(detailProduct)
    const [cartSubTotal,setCartSubTotal]=useState(0)
    const [cartTax,setCartTax]=useState([])
    const [cartTotal,setCartTotal]=useState(0)
    /*const [values,setValues]=useState({
        product:[],
        detail:{...detailProduct}
    })*/
    let tempProducts=[];
    const setProducts=()=>{
            storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
            
        })
        setProduct(tempProducts);
    }


    useEffect(()=>{
      setProducts();
      console.log(tempProducts)
    },[])

  useEffect(()=>{
    addTotals();
  },[cart])


   const getItem=id=>{
     const findProduct=product.find(item=>item.id===id);
     return findProduct;
   }  

   const handleDetail=(id)=>{
       const handleProduct=getItem(id);
       setDetail(handleProduct);    
   }

   const addToCart=(id)=>{
    let tempProd=[...product]
    const index=tempProd.indexOf(getItem(id));
    const products=tempProd[index];
    //const products=getItem(id);
    products.inCart=true;
    products.count=1;
    const price=products.price;
    products.total=price;
    setCart(cart=>[...cart,products]);
    
   }
  
console.log(tempProducts)
  const openModel=id=>{
    const product=getItem(id)
    setModelProduct(product)
    setModelOpen(true)
  }

  const closeModel=()=>{
    setModelOpen(false)
  }

  const increment=id=>{
    const tempCart=[...cart];
    let selectedItem=tempCart.find(item=>item.id===id);
    let index=tempCart.indexOf(selectedItem);
    const product=tempCart[index];
    product.count=product.count+1;
    product.total=product.count*product.price;
    setCart([...tempCart]);
  }

  const decrement=id=>{
    const tempCart=[...cart];
    let selectedItem=tempCart.find(item=>item.id===id);
    let index=tempCart.indexOf(selectedItem);
    const product=tempCart[index];
    product.count=product.count-1;

    if(product.count===0){
      removeItem(id);
    }else{
      product.total=product.count*product.price;
      setCart([...tempCart]);
    }

  }
 const removeItem=id=>{
    let tempProd=[...product];
    let tempCart=[...cart];

    tempCart=tempCart.filter(item=>item.id!==id);

    const index=tempProd.indexOf(getItem(id));
    let removedProduct=tempProd[index];
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.price=0;
    setCart([...tempCart]);
    setProduct([...tempProd]);
    
  }

  const clearCart=()=>{
    setCart([]);
    setProducts();
  }
  const addTotals=()=>{
    let subTotal=0;
    cart.map(itm=>{subTotal+=itm.total});
    const tempTax=subTotal*0.1;
    const tax=parseFloat(tempTax.toFixed(2));
    const total=subTotal+tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }


  return (
    <ProductContext.Provider value={{
product,
detail,
cart,
handleDetail,
addToCart,
openModel,
modelOpen,
closeModel,
modelProduct,
cartSubTotal,
cartTax,
cartTotal,
increment,
decrement,
removeItem,
clearCart,
addTotals

    }}>

        {props.children}
    </ProductContext.Provider>
  )
}

const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}
