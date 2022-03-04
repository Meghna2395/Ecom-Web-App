import React,{useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import CashonDelivery from './CashonDelivery'
const Payment = () => {


    const [product,setProduct] = useState({
        name:"Test",
        price:20
    })

    const makepayment = token =>{
       const data = {product,token}

       axios.post('/payment',data).then(res=>{
           console.log(res)
       }).catch(err=>{
        console.log(err)
           
       })
    }


    return (<div>
        <StripeCheckout stripeKey={'pk_test_51IHOqOFN090ZXmXFmyZysjBJbZSsOGWMb6RLuFOiFE2Mt58cZN4CeNZaU5Ucq8ehjfWg9S2Kvf17SpHRr5uGMS7T00AuNNjHBx'} token={makepayment} amount={product.price * 100} currency="inr" name='Test Payment 10'>
          <button> payment test </button>
        </StripeCheckout> 
        <CashonDelivery/>
    </div>)
        
       
    
        
    }
   

export default Payment
