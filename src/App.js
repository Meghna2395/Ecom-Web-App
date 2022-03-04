import React from 'react' 
import {BrowserRouter as Router} from "react-router-dom"
import CartContextCom from "./Components/Extra/GlobslState/CartContextCom"

import Layout from './Components/Layout/Layout'






const App = () => {
 
  return ( <Router> <CartContextCom>
    <div>
        <Layout/>
    </div>
 </CartContextCom> </Router> )
}

export default App
