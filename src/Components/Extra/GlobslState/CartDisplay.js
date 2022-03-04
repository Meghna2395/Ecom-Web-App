import React from 'react'
import CartProduct from './CartProduct'
import {Link} from "react-router-dom"

const CartDisplay = (props) => {
 
     const [cart,setCart,onAdd,onRemove] = [props.cart,props.setCart,props.onAdd,props.onRemove]
     
     const displayProduct = cart.map((pro,i)=>{
     return  <CartProduct name={pro.name} price={pro.price} img={pro.image} id={pro.id} setCart={setCart} cart={cart} qty={pro.qty}  onAdd={onAdd} onRemove={onRemove}   />
     }) 
     
     console.log(cart,"qty")
    
  
    const totalPrice = cart.reduce((prev, curr) => prev + (curr.price*curr.qty), 0);


    return (
        <div  onMouseLeave={()=>{
            props.setState()
        }}  style={{position:"relative",left:"100px",top:"0px",zIndex:"100000",background:"white",padding:"20px",boxShadow: "0px 1px 14px 4px rgba(118,118,118,0.45)",width:"300px"}} >

            {displayProduct}  

         
         <div style={{borderTop:"1px rgb(102 102 102 / 25%) solid"}} > 
              <h4 style={{textAlign:"center"}} > SubTotal : {totalPrice} </h4>  
              </div>
         
         
         <div style={{borderTop:"1px rgb(102 102 102 / 25%) solid",paddingTop:"20px"}} > 
              <Link to="/checkout" ><button style={{ padding: "10px 18px",borderRadius:"5px", backgroundColor: '#0873BB',color:"white",border:"none",fontSize:"18px",margin:"auto",display:"block"}} > Place Order </button></Link>
              
                </div>  
        </div>
    )
}

export default CartDisplay
