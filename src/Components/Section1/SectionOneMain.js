import React,{useState} from 'react'
import SupportTab from "./SupportTab"
import Searchtab from "./Searchtab"
import Navbar from "./Navbar"


const SectionOneMain = () => {

  const [display,setDisplay] = useState()

    return (
        <div>
            <SupportTab/> 
            <Searchtab  display={display} setDisplay={setDisplay}    />
            <Navbar  display={display} setDisplay={setDisplay}   />
        </div>
    )
}

export default SectionOneMain
