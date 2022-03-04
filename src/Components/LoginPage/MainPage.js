import React from 'react'
import Containerr from '../Extra/Containerr'
import LoginComponent from './LoginComponent'
import LoginModel from './LoginModel'
import Regestration from './Regestration'

const MainPage = () => {
    return (
    <Containerr>
        <div style={{display:"flex",alignContent:"space-between"}} >
            <div style={{flex:"1"}} > <LoginComponent/> </div> 
            <div style={{flex:"1"}} > <Regestration/> </div>
        </div> 
        </Containerr> 
   
    )
}

export default MainPage
