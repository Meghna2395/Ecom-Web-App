import React from "react";
import Containerr from "../Extra/Containerr";
import classes from "./ImgCom.module.css";
import {Link} from "react-router-dom"


const ImgCom2 = () => {
  return (
    <Containerr>
      <div style={{ margin: "42px auto" }}>
        <div className={classes.mainDiv2}>
          <div className={classes.imgCom2} > 
            <img
              src="https://www.primeabgb.com/wp-content/uploads/2020/08/Buy-ASUS-Motherboard.jpg"
              alt="lgo"
            />{" "}
          </div>
          <div className={classes.imgCom2} >
            <img
              src="https://www.primeabgb.com/wp-content/uploads/2020/08/Buy-ASUS-Motherboard.jpg"
              alt="lgo"
            />{" "}
          </div>
          <div className={classes.imgCom2} >
          <Link to="/product" > <img 
              src="https://www.primeabgb.com/wp-content/uploads/2020/08/Buy-ASUS-Motherboard.jpg"
              alt="lgo"
            /> </Link>  
          </div>
        </div>
      </div>
    </Containerr>
  );
};

export default ImgCom2;
