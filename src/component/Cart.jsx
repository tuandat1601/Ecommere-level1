import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart,delCart } from '../redux/action/index'

import { useSelector } from 'react-redux'
function  Cart() {
  const allproducts = JSON.parse(localStorage.getItem("products"));
const dispatch = useDispatch();
console.log(allproducts)
localStorage.setItem("products",JSON.stringify(allproducts));
console.log(allproducts)
let state = useSelector((state) => state.handleCart);
  const increated =async (x) => {
    await dispatch(addCart(x))
    await localStorage.setItem("products",JSON.stringify(state));

  }
  const decreated =async (x) => {
    await dispatch(delCart(x))
    await localStorage.setItem("products",JSON.stringify(state));

  }
  const ShowProduct =() => {
    if(!state.length&&allproducts.length>0){
      localStorage.setItem("products",JSON.stringify(allproducts))
    }
    else{

      localStorage.setItem("products",JSON.stringify(state))
    }
    const products =  JSON.parse(localStorage.getItem("products"))
    // if(state.length===0){
    //   state=products
    // }
    // else{
    //   state = state.handleCart;
    // }
  
    let con = !state.length?products:state;
    console.log(state)
    return (<>
      {con.map((product) => {
        return (   <div key={product.id}>      
            <div className="cart-item" >
              <img className='cart-item__img' src={product.image} alt="" />
              <div className="cart-item__content">
                <p>{product.title}</p>
                <p>{product.qt}</p>
                <button onClick={() => increated(product)}>+</button>
                <button onClick={() => decreated(product)}>-</button>
              </div>
            </div>
        </div>
        )
     
     })}
    </>

    )
  }
  return (
    <div className='cart'>
      <ShowProduct/>

    </div>
  )
}

export default Cart