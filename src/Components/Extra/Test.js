import React from 'react'

const Test = (props) => {
    return (
       
        <div onMouseLeave={()=>{
            props.setDisplay()
        }} style={{background:"white",position:"relative",zIndex:"100",top:"0px",left:"0px",margin:"0px 350px",border:"1px solid black"}} >
         <div> 
            <div> <h1> Mouse </h1>   </div> 
            <div> <h1> Keyboard </h1> </div>
            <div> <h1>Router</h1>   </div>
            <div> <h1> Monitor </h1>    </div> 
            </div>  
        </div>
    )
}

export default Test
