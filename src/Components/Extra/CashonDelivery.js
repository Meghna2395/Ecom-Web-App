import React,{useState,useContext} from 'react'
import {CartContext} from './GlobslState/CartContextCom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';


const CashonDelivery = () => { 
   
   const [show,setShow] = useState()
   const [cart,setCart] = useContext(CartContext)
   
   const totalPrice = cart.reduce((prev, curr) => prev + (curr.price*curr.qty), 0);
   
    const Allproduct = cart.reduce((prev, curr) => (curr.id)+','+prev , '') 

    console.log(Allproduct,"All product list") 
     
    const value = {name:"yash malviya",email:"hovodek575@cocyo.com",phone:'99999999999',address:'Nagpur',price:totalPrice,product:Allproduct}

    const OnCODhandler = (x) =>{
        console.log(x)
           axios.post('/order',{x}).then(res=>{
               if(res.status === 201){
                   setShow(<h1> {res.data.message} </h1>)
                   setCart([]) 
                   setTimeout(()=>{
                      setShow(<Navigate to='/' />)
                   },2000)
               }
           })
    }

    return (
        <div>
            <button onClick={()=>{
                OnCODhandler(value)}} > Cash on Delivery </button> 
                {show}
        </div>
    )
}

export default CashonDelivery



//[{1},{2}.{3},] -> '1,2,3'  reduce