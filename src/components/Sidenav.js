import React,{useState} from "react"


export default function Sidenav(props) {


    return(
        <div>
            <div id={"mySidenav"} className={props.class}>
                <a href="#" className="closebtn" onClick={props.click}>&times;</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Home</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>About</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Posts</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
            </div>
        </div>
    )
}