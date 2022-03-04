import React from "react";
import LoginComponent from "./LoginComponent";


const LoginModel = () => {
  return (
    <div style={{background:'rgba(3, 3, 3, 0.5)',position:"fixed",zIndex:"2000",top:"0px",left:"0px",height:"100%",width:'100%'}}>
      <div style={{background:"white",padding:"25px",borderRadius:"20px",margin:"12% auto",width:"400px",height:"350px" }}>
        <LoginComponent/>
      </div>
    </div>
  );
};

export default LoginModel;
