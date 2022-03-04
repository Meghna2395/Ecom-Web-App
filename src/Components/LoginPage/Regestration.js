import React from "react";
import classes from "./Login.module.css"
import { useFormik } from 'formik';
import axios from "axios"
const Regestration = () => { 

    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          name:''
        },
        onSubmit: values => {
          axios.put("/customer/signup",values).then(res=>{
            if(res.status === 201){
              formik.handleReset()
             alert("Email Sent")
            }
            console.log(res)
          }).catch(err=>{
            console.log(err)
            alert("error")
          })
        },
      }); 



  return (
    <div className={classes.mainDiv} >
      <h2> Register </h2> 
      <form onSubmit={formik.handleSubmit}>
      <span>
        <label  htmlFor="email"> Email address * </label>
        <input 
         id="email"
         name="email"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.email}
         />
      </span> 
      <span>
        <label  htmlFor="name"> Full Name * </label>
        <input 
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         />
      </span>
      <span>  
        <label htmlFor="password"> Password * </label>
        <input 
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.password}
        type="password" />
      </span>
      <button type="submit"
        style={{
          padding: "10px 18px",
          borderRadius: "5px",
          backgroundColor: "#0873BB",
          color: "white",
          border: "none",
          fontSize: "18px",
        }}
      >
        Register
      </button>  
      <button onClick={formik.handleReset}
        style={{
          padding: "10px 18px",
          borderRadius: "5px",
          backgroundColor: "#0873BB",
          color: "white",
          border: "none",
          fontSize: "18px",
          margin: "0px 10px",
        }}
      >
       Clear All
      </button> 
      </form>
    </div>
  );
};

export default Regestration;
