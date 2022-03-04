import React from "react";
import Containerr from "../Extra/Containerr";
import { AiFillCaretRight } from "react-icons/ai";

const Links = () => {
    const help = ['Shipping Policy','Return Policy','Privacy Policy','Terms & Conditions','Askgb']
    const ql = ['Contact Us', 'About Us','Payment Options / Bank Details','Careers']
    const mapping = x =>{
        const z = x.map((y,i)=>{
            return <p style={{color:"#B6AFA8"}}  key={i} > <AiFillCaretRight color="#B6AFA8" /> {y} </p>
        })

        return z
    }
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Containerr>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <h3
              style={{
                borderBottom: "1px rgb(102 102 102 / 25%) double ",
                fontWeight: "600",
                fontSize: "20px",
                textTransform: "uppercase",
                paddingBottom: "10px",
                marginBottom:"5px",
                marginRight:"5px"
              }}
            >
              Location
            </h3>
            <p style={{ color: "#97948F",margin:"0px" }}> 
              <strong>Prime ABGB Pvt. Ltd.</strong> <br />
              Simlim Square, 106-109, 1st Floor, <br />
              D.B.Marg, Lamington Road, Grant Road East Mumbai, Maharashtra –
              400007 Phone: (022) 6740 2000 Email: sales@primeabgb.com
            </p>
          </div>
          <div style={{ flex: "1" }}> 
          <h3
              style={{
                borderBottom: "1px rgb(102 102 102 / 25%) double ",
                fontWeight: "600",
                fontSize: "20px",
                textTransform: "uppercase",
                paddingBottom: "10px",
                marginBottom:"5px",
                marginRight:"5px"
              }}
            >
              HELP
            </h3>
          
            {mapping(help)} </div>
          <div style={{ flex: "1" }}>
              
          <h3
              style={{
                borderBottom: "1px rgb(102 102 102 / 25%) double ",
                fontWeight: "600",
                fontSize: "20px",
                textTransform: "uppercase",
                paddingBottom: "10px",
                marginBottom:"5px",
                marginRight:"5px"
              }}
            >
              quick link
            </h3> {mapping(ql)}  </div>
          <div style={{ flex: "1" }}>  <h3
              style={{
                borderBottom: "1px rgb(102 102 102 / 25%) double ",
                fontWeight: "600",
                fontSize: "20px",
                textTransform: "uppercase",
                paddingBottom: "10px",
                marginBottom:"5px",
                marginRight:"5px"
              }}
            >
              COURIER PARTNER
            </h3> <img src="https://www.primeabgb.com/wp-content/uploads/2019/02/COURIER-PARTNER1-2.png" alt="" style={{width:"200px",height:"100px"}} />  </div>
         
        </div>
      </Containerr>
    </div>
  );
};

export default Links;
