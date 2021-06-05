import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav(props) {
    const [show ,handleShow] = useState(false)

    const transitionNav=()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll",transitionNav)
        return ()=>window.removeEventListener("scroll",transitionNav)
    },[])
    return (
        <div className={`nav ${show &&'nav_black'}`}>
            <div className="nav_contains">

            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" className="nav_logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav_avatar"/>

            </div>
            
        </div>
    );
}

export default Nav;