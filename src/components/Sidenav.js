import React,{useState} from "react"


export default function Sidenav(props) {

    let [open,setOpen] = useState(false);
    console.log(open)

    return(
        <div>
            <span className={"burger"} onClick={()=>setOpen(!open)}>&#9776;</span>
            <div  id={"mySidenav"} className={open ? "sidenav": "sidenav navMenuOpen"}>
                <a href="#" className="closebtn" onClick={()=>setOpen(!open)}>&times;</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Home</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>About</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Posts</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
            </div>
        </div>
    )
}