import React from "react";
import classes from "./Searchtab.module.css";



const Searchtab = (props) => {
 
   
  const setDisplay = props.setDisplay
 


  return (
    <div onMouseEnter={()=>{
          setDisplay()
    }}  className={classes.mainDiv}>
      <div className={classes.div1}>
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2019/12/prime-abgb-logo.png"
          alt="logo"
        />
      </div>
      <div className={classes.div2}>
        <span
          style={{
            border: "1px solid #E6E6E6",
            padding: "7px 0px 8px 10px",
            borderRadius: "10px",
          }}
        >
          
          <input placeholder="Search entire store here..." type="text" />
          <button
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              textTransform: "uppercase",
              background:"#0873BB"
            }}
          >
            
            Search
          </button>
        </span>
      </div>
    </div>
  );
};

export default Searchtab;
