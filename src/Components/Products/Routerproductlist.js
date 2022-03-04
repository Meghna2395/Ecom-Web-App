import React,{useEffect,useState} from "react";
import Containerr from "../Extra/Containerr";
import Product from "./Product";
import axios from "axios"

const Routerproductlist = () => {
 
 const [data,setData] = useState([])

useEffect(()=>{
  axios.get("/hello/").then(res=>{
    setData(res.data) 
    console.log(res.data)
  }).catch(err=>{
    alert(err)
  })

},[])

  const allProduct = data.slice(0,3).map((product, i) => {
    return (
      <Product
        key={product.name + i * 154}
        image={product.imageurl}
        price={product.price}
        name={product.name}
        id={product.id}
      />
    );
  });

  const keyProduct = data.slice(3,7).map((product,index) => {
    console.log(index)
    return (
      <Product
        key={product.name * 154}
        image={product.imageurl}
        price={product.price}
        name={product.name}
        id={product.id}
      />
    );
  });
 


  return (
    <Containerr>
      <div style={{ margin: "42px 0px" }}>
        <h3 style={{ borderBottom: "1px rgb(102 102 102 / 25%) double " }}>
          Router
        </h3>
        <div style={{ display: "flex", width: "100%", margin: "10px"}}>
          {allProduct}
        </div>
      </div>  

      <div style={{ margin: "42px 0px" }}>
        <h3 style={{ borderBottom: "1px rgb(102 102 102 / 25%) double " }}>
          Keyboard
        </h3>
        <div style={{ display: "flex", width: "100%", margin: "10px"}}>
          {keyProduct}
        </div>
      </div>
    </Containerr>
  );
};

export default Routerproductlist;
