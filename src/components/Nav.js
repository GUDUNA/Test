import React from "react"

function Nav(){
    return (
        <div className={"meniu col-9 d-flex justify-content-center"}>
            <ul>
                <li><a href="/home" onClick={(e)=>e.preventDefault()}>Home</a></li>
                <li><a href="/About" onClick={(e)=>e.preventDefault()}>About</a></li>
                <li><a href="/Posts" onClick={(e)=>e.preventDefault()}>Posts</a></li>
                <li><a href="/Contact" onClick={(e)=>e.preventDefault()}>Contact</a></li>
            </ul>
        </div>
    );
}

export default Nav