
import React, { useState } from 'react'

const HandlingEvents = () => {
    const black='black'
    const [bG, setBg]= useState (black);
    const [name, setName]= useState ('On click');

    const bgChange = () => {
    //  console.log("click");
     
     let newBg="yellow"
     setBg(newBg);
     setName("Working")
    
    }
    const onDubleClick = () => {
        console.log("click double");
        let backBg="black"
        setBg(backBg);
        setName("On click")
    }

    return (
        <div style={{backgroundColor:bG}}>
            <button onClick={bgChange}  onDoubleClick={onDubleClick}>{name}</button>
        </div>
    )
}

export default HandlingEvents
