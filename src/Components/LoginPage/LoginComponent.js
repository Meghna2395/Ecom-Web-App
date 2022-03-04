import React,{useContext} from 'react'
import classes from "./Login.module.css"
import { useFormik } from 'formik';
import axios from "axios"
import {CartContext} from "../Extra/GlobslState/CartContextCom"
import { Navigate } from 'react-router-dom';

const LoginComponent = () => { 

 const ContextLogin = useContext(CartContext)
  
 const login = ContextLogin[4]

 const setLogin = ContextLogin[5]


    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        onSubmit: values => {
          axios.post("/customer/login",values).then(res =>{
            console.log(res.data)
            if(res.status === 200){
            setLogin(res.data) 
          }
          
          }).catch(err=>{
            console.log(err)
          })
        },
      }); 



    return (
        <div  className={classes.mainDiv} > 
        {(login.isAuth && window.location.pathname === '/login'  ) ? <Navigate to='/' /> : null} 
        {(login.isAuth && window.location.pathname === '/checkout'  ) ? <Navigate to='/payment' /> : null} 
        <h2> Login </h2> 
        <form onSubmit={formik.handleSubmit} >
        <span>
          <label  htmlFor=""> Email address or UserName * </label>
          <input 
          type="text" 
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
           />
        </span>  
        <span>
          <label htmlFor=""> Password * </label>
          <input 
          type="password" 
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}/>
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
          Login
        </button> 
        </form>
      </div>
    )
}

export default LoginComponent
