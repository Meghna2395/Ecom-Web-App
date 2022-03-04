import React, { useState } from "react";
import Containerr from "../Extra/Containerr";
import ProductTabs from "./ProductTabs";
import classes from "./SingleProduct.module.css";
const SingleProduct = () => {
  const [product, setProduct] = useState(1);

  return (<>
    <Containerr>
      <div className={classes.mainDiv}>
        <div className={classes.div1}>
          <img
            src="https://www.primeabgb.com/wp-content/uploads/2020/12/CORSAIR-Air-Series-AF120-LED-2018-Blue-120mm-Fan-Single-Pack-CO-9050081-WW.jpg"
            alt="product"
          />
        </div>
        <div className={classes.div2}>
          <h4>
            CORSAIR Air Series AF120 LED (2018) Blue 120mm Fan Single Pack
            CO-9050081-WW
          </h4>
          <p>
            CORSAIR AF120 LED cooling fans combine bright LED lighting, strong
            static pressure, low noise, and high airflow to deliver great
            cooling performance anywhere in your PC.
          </p>
          <p>
            <span style={{ textDecorationLine: "line-through", color: "grey" }}>
              $2000
            </span>
            <span style={{ fontSize: "24px", color: "red" }}>$900</span>
          </p>

          <div>
            <button
              onClick={() => {
                setProduct(product + 1);
              }}
            >
              +
            </button>
            <h4> {product} </h4>
            <button
              onClick={() => {
                setProduct(product - 1);
              }}
              disabled={product <= 1 ? true : false }
            >
              -
            </button>{" "}
          </div>
        </div>
      </div>
    </Containerr>
    <ProductTabs/>
</>  );
};

export default SingleProduct;
