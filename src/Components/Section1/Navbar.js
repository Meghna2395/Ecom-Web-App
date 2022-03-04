import React from "react";
import {Link} from "react-router-dom"
import classes from "./Navbar.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import HoverBox1 from "../Extra/HoverBox1";
import HoverBox4 from "../Extra/HoverBox4";
import HoverBox2 from "../Extra/HoverBox2";
import HoverBox3 from "../Extra/HoverBox3";
const Navbar = (props) => {
   
  const [display,setDisplay] = [props.display,props.setDisplay]


  return (
    <div
      style={{
        background: "#F59E13",
        height: "48px",
        position: "sticky",
        top: "0",
      }}
    >
      <div className={classes.mainDiv}>
    <Link to="/" > <p 
       > 
          Home 
          </p> </Link>    
        <p onMouseEnter={()=>{
          setDisplay(<HoverBox1 setDisplay={setDisplay}/> )
        }} 
        >
           BUILD YOUR PC <AiFillCaretDown color="black" />
        </p>
        <p onMouseEnter={()=>{
          setDisplay(<HoverBox2 setDisplay={setDisplay}/> )
        }} > GAMING LAPTOP  <AiFillCaretDown color="black" /> </p> 


        <p onMouseEnter={()=>{
          setDisplay(<HoverBox3 setDisplay={setDisplay}/> )
        }} > ACCESSORIES  <AiFillCaretDown color="black" /> </p>

        <p onMouseEnter={()=>{
          setDisplay(<HoverBox4 setDisplay={setDisplay}/> )
        }} > ENTERPRISE  <AiFillCaretDown color="black" /> </p>
      </div>
      {display}
    </div>
  );
};

export default Navbar;
