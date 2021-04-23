import React from "react"

function Nav(){
    return (
        <div className={"meniu col-9 d-flex justify-content-center"}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Posts">Posts</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Nav