import React, { useContext, useState } from "react";
import classes from "./SupportTab.module.css";
import { FiLogIn, FiHeart, FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Extra/GlobslState/CartContextCom";
import CartDisplay from "../Extra/GlobslState/CartDisplay";
import { Link } from "react-router-dom";

const SupportTab = () => {
  const [cart, setCart, onAdd, onRemove, login,setLogin] = useContext(CartContext);
  const [set, setState] = useState();

  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );
  //  prev is pervious value and curr is current value
  // (curr.price*curr.qty) => 100(current price) *(multiply) 2(quantity)
  return (
    <>
      <div className={classes.pp} style={{ background: "#F8F8F8" }}>
        <div className={classes.mainDiv}>
          <div style={{ textAlign: "left" }}>
            <FiLogIn size="1.2rem" color="#0D76BB" />
            {login.isAuth ? (
              <span style={{margin:"0px 0px 20px 5px  "}} >
                <p style={{ display: "inline-block" }}>{login.name}</p>
                <p style={{ display: "inline-block",marginLeft:"16px" }} onClick={()=>{
                  setLogin([])
                }} >Logout</p>{" "}
              </span>
            ) : (
              <Link to="/login">
                {" "}
                <p> Login and Register </p>{" "}
              </Link>
            )}
          </div>

          <div style={{ textAlign: "center" }}>
            <label> Support:</label> <p> yashmalviya@gmial.com </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <span style={{ paddingRight: "16px" }}>
              <FiHeart size="1.2rem" color="#666666" /> <p> Wishlist </p>
            </span>
            <span
              onMouseEnter={() => {
                if (cart.length >= 1) {
                  setState(
                    <CartDisplay
                      cart={cart}
                      setCart={setCart}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      setState={setState}
                    />
                  );
                } else {
                }
              }}
              style={{
                borderLeft: "1px rgb(102 102 102 / 25%) solid",
                paddingLeft: "16px",
              }}
            >
              <FiShoppingCart size="1.2rem" color="#666666" />
              <p>
                <span
                  style={{
                    fontSize: "16px",
                    borderRadius: "50%",
                    background: "#0873BB",
                    color: "white",
                    height: "25px",
                    width: "25px",
                    padding: "1px 6px",
                    position: "relative",
                    top: "-10px",
                    left: "-5px",
                  }}
                >
                  {cart.length}
                </span>
                - items <span> price : ${totalPrice} </span>
              </p>
              {set}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportTab;
