import React from "react";
import Containerr from "../Extra/Containerr";
import classes from "./ImgCom.module.css";
const ImgCom = () => {
  return (
    <div style={{ margin: "42px 0px" }}>
      <Containerr>
        <div className={classes.mainDiv}>
          <div className={classes.imgB}>
            <img
              src="https://www.primeabgb.com/wp-content/uploads/2020/05/essentil-small-banner-1.jpg"
              alt="imgB"
            />
          </div>

          <div className={classes.imgS}>
          <div className={classes.imgSin} >
            <img style={{marginBottom:"10px"}}
              src="https://www.primeabgb.com/wp-content/uploads/2020/11/special-offer.jpg"
              alt="imgS"
            /> 
            <img  style={{marginTop:"10px"}}
              src="https://www.primeabgb.com/wp-content/uploads/2020/11/special-offer.jpg"
              alt="imgS"
            /> 
            </div>
          </div>
        </div>   
  </Containerr>
    </div>
  );
};

export default ImgCom;
