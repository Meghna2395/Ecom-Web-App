import React from 'react'
import Containerr from '../Extra/Containerr'

const CopyRigth = () => {

    const x = new Date()
    const y = x.getFullYear()

    return (
        <div style={{backgroundColor:""}} >
            <Containerr> 
                
            <div style={{display:"flex"}} >        
                
            <div style={{flex:1,color:"white",float:"left"}} > Copyright © {y} Prime ABGB Pvt. Ltd. All rights reserved </div>
<div style={{float:"right"}} > </div>
                
                
                </div>    
                
                 </Containerr>
        </div>
    )
}

export default CopyRigth
