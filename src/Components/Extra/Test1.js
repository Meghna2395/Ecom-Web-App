import React from 'react'

const Test1 = (props) => { 


    return (<div onMouseLeave={()=>{
        props.setDisplay()
    }}  style={{background:"white",position:"relative",zIndex:"100",top:"0px",left:"0px",margin:"0px 350px",border:"1px solid black"}} >
         <div> 
            <div> <h1> Mouse 1 </h1>   </div> 
            <div> <h1> Keyboard 2</h1> </div>
            <div> <h1>Router 3</h1>   </div>
            <div> <h1> Monitor 4 </h1>    </div> 
            </div>  
        </div>
     
    )
}

export default Test1
