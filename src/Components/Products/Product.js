import React,{useContext} from "react";
import { CartContext } from "../Extra/GlobslState/CartContextCom";

const Product = (props) => {   

 
 const context = useContext(CartContext)

 const onAdd = context[2] //to access value of array in [] you define index value

 const product = {name:props.name,price:props.price,image:props.image,id:props.id} 

 

  return (
    <div style={{ width: "280px", height: "400px", flex: "1" }}>
      <p
        style={{
          display: "inline-block",
          background: "red",
          padding: "10px 24px",
          textAlign: "center",
          position: "relative",
          top: "10px",
          left: "1px",
        }}
      >
        15%
      </p>
      <img
        style={{
          width: "250px",
          height: "250px",
          objectFit: "fill",
          display: "block",
          margin: "auto",
        }}
        src={`http://localhost:5000/${props.image}`}
        alt="first product"
      />
      <p
        style={{
          color: "royalblue",
          whiteSpace: "wrap",
          padding: "10px",
          margin: "0",
        }}
      >
        {props.name}
      </p>
      <p style={{ padding: "10px", margin: "0" }}>
        <span style={{ color: "grey", textDecorationLine: "line-through" }}>
          $2000
        </span>
        <span style={{ color: "red" }}> ${props.price} </span>
      </p> 
      <button onClick={()=>{
        onAdd(product)
      }} > Add to Cart </button>
    </div>
  );
};

export default Product;
