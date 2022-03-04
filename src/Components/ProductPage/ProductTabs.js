import React, { useState } from "react";
import Containerr from "../Extra/Containerr";
import classes from "./SingleProduct.module.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
const ProductTabs = () => {
  const [tab, setTab] = useState(1);
 
  const style = {background:"royalblue",color:"white"}
  return (
    <div style={{ background: "#F8F8F8" }}>
      <Containerr>
        <div className={classes.buttondiv}>
          
          <button style={tab === 1 ? style : null }  onClick={()=>{
              setTab(1)
          }} > Description </button>
          <button style={tab === 2 ? style : null } onClick={()=>{
              setTab(2)
          }} > Additional Information </button> 
          <button style={tab === 3 ? style : null }  onClick={()=>{
              setTab(3)
          }} > Review </button>
        </div>
        <div style={{ background: "white",marginTop:"-5px",zIndex:"1000",position:"relative",borderColor:"rgba(102, 102, 102, 0.246)"}}> 
        
        
        {/* {tab === 1 ? <Tab1/> : null} */}
        {tab === 2 ? <Tab2/> : null}
        {tab === 3 ? <Tab3/> : null}
        
        
        
         </div>
      </Containerr>
    </div>
  );
};

export default ProductTabs;
