import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Containerr from "../Extra/Containerr";
import { CartContext } from "../Extra/GlobslState/CartContextCom";
import LoginModel from "../LoginPage/LoginModel";
import Checkproductlist from "./Checkproductlist";
import { Router } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart, onAdd, onRemove,login] = useContext(CartContext);

  const [page,setPage] = React.useState()

  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);

  const displayProduct = cart.map((pro, i) => {
    return (
      <Checkproductlist
        name={pro.name}
        price={pro.price}
        image={pro.image}
        qty={pro.qty}
        onAdd={onAdd}
        id={pro.id}
        onRemove={onRemove}
        index={i}
      />
    );
  });  




  return (<>
    <Containerr>
      <div
        style={{
          marginBottom: "20px",
          fontWeight: "500",
        }}
      >
        <h2>Your Order</h2>
      </div>
      <div>
        {" "}
        <table style={{ width: "100%" }}>
          <tr
            style={{
              border: "1px rgb(102 102 102 / 25%) solid",
              borderLeft: "none",
              borderRight: "none",
              paddingBottom: "10px",
              fontSize: "20px",
            }}
          >
            <th>Sr.no</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Add Product</th>
            <th>Remove Product </th>
            <th> Quantity </th>
            <th> Price </th>
          </tr>
          {displayProduct}
          <tr
            style={{
              paddingBottom: "1px",
              borderBottom: "1px rgb(102 102 102 / 25%) solid",
            }}
          ></tr>
        </table>{" "}
      </div>

      <div
        style={{
          borderTop: "1px rgb(102 102 102 / 25%) solid",
          padding: "20px",
        }}
      >
        <span>
          <button
            style={{
              padding: "10px 18px",
              borderRadius: "5px",
              backgroundColor: "#0873BB",
              color: "white",
              border: "none",
              fontSize: "18px",
              margin: "auto",
              display: "block",
            }} 
            onClick={()=>{
              if(login.isAuth){
                setPage(<Navigate to='/payment' />)
              }else{
                setPage(<LoginModel/>)
              }
            }}
          >
            Checkout
          </button>
        </span>
        <span> Total : {totalPrice} </span>
      </div>
    </Containerr> 
   
     {/* {display ? <LoginModel/> : (login.isAuth ? <Redirect to='/paymentGateway'/> : null ) } */}
      {page}
</>  );
};

export default Checkout;
