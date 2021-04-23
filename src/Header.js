import React from 'react'

function LogoPlace(props){
    return(
        <div className={'logo col-3'}>
            <img src={props.uri} alt="SiteLogo"/>
        </div>
    );
}

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

function Header(){
    return(<div className={'row hederi'}>
                <LogoPlace uri={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}/>
                <Nav />
            </div>);

}

export default Header;