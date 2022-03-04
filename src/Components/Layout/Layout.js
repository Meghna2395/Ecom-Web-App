import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Checkout from '../CheckOut/Checkout'
import Payment from '../Extra/Payment'
import FooterMain from '../Footer/FooterMain'
import Home from '../Home/Home'
import MainPage from '../LoginPage/MainPage'
import ProductTabs from '../ProductPage/ProductTabs'
import SingleProduct from '../ProductPage/SingleProduct'
import SectionOneMain from '../Section1/SectionOneMain'

const Layout = () => {
    return (<div>
            <SectionOneMain/>
       <Routes>
             <Route exact path="/" component={Home} />

             <Route exact path="/product"> 
             <SingleProduct/>  <ProductTabs/>  
             </Route>
            
             <Route exact path="/login" component={MainPage}  /> 
             <Route exact path="/payment" component={Payment}  /> 
             <Route path="/checkout"> <Checkout/> </Route>
       </Routes>  
       <FooterMain/>
       </div>
    )
}

export default Layout
