import React from "react";

const CartProduct = (props) => {
 
  const product = {name:props.name,price:props.price,image:props.image,id:props.id,qty:props.qty} 
  
  const [onRemove,onAdd] = [props.onRemove,props.onAdd]
  

  return (
    <div style={{ display: "flex", height: "100px",border: "1px rgb(102 102 102 / 25%) solid", margin:"5px",borderRadius:"10px"}}>
      <div style={{ flex: 1 }}>
        <img
          style={{ width: "100px", height: "100px", objectFit: "fill" ,borderRadius:"10px" }}
          src={`http://localhost:5000/${props.img}`}
          alt="picPRoduct"
        />
      </div>
      <div style={{ flex: 2 ,flexDirection:"column",padding:"5px 5px 5px 15px",textAlign:"left"}}>
        <p style={{margin:"3px 0px"}}   > Name: {props.name} </p> 
        <p style={{margin:"3px 0px"}} > Price:${props.price}</p> 
        <p style={{margin:"3px 0px"}} > Quantity:{props.qty} </p>
      </div> 
      <div> <button style={{margin:"20px",background:"white",border:"none"}} onClick={()=>{
         onAdd(product)
      }} > + </button> <button style={{margin:"20px",background:"white",border:"none"}} onClick={()=>{
        onRemove(product)
     }} > - </button>  </div>
    </div>
  );
};

export default CartProduct;
