import React from "react";

const Checkproductlist = (props) => {
  const product = {name:props.name,price:props.price,image:props.image,id:props.id,qty:props.qty} 
  return (
    <tr> 
        <td>{props.index+1}{")"}</td>
      <td>
         <img
          style={{ width: "200px", height: "200px", objectFit: "cover" ,display:"block",margin:"auto" }}
          src={`http://localhost:5000/${props.image}`}
          alt=""
        />
      </td>
      <td> <h4 style={{textAlign:"center"}}   >  {props.name} </h4></td> 
      <td> <button style={{display:"block",margin:"auto"}}  onClick={()=>{
          props.onAdd(product)
      }} > + </button> </td>
      <td>
      <button style={{display:"block",margin:"auto"}}  onClick={() => {
          props.onRemove(product)
      }}> - </button></td> 
      <td> <h4 style={{textAlign:"center"}} > {props.qty} </h4> </td> 
      <td> <h4 style={{textAlign:"center"}} >${props.qty*props.price}</h4> </td>
    </tr>
  );
};

export default Checkproductlist;
