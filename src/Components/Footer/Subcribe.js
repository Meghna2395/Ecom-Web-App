import React from "react";
import Containerr from "../Extra/Containerr";

const Subscribe = () => {
  return (
    <Containerr>
      <div style={{ margin: "100px 0px" }}>
        <h3 style={{ borderBottom: "1px rgb(102 102 102 / 25%) double ",paddingBottom:"20px",color:'#0873BB',fontSize:"20px",fontWeight:"600" }}>
        Subscribe for Newsletter!
        </h3>
        <p style={{ display: "inline-block" }}>
          To Stay updated for latest products and notifications. Enter Your
          Email address :
        </p>
        <input style={{height:"37px",fontSize:"20px",backgroundColor:"#F8F8F8",margin:"0px 10px",border:"0.5px solid rgb(102 102 102 / 25%)",borderRadius:"5px"}}  type="text" />
        <button style={{ padding: "10px 18px",borderRadius:"5px", backgroundColor: '#0873BB',color:"white",border:"none",fontSize:"18px",margin:"0px 10px"}}>
          Subscribe
        </button>
      </div>
    </Containerr>
  );
};

export default Subscribe;
