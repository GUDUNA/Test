import React from 'react'
import LogoPlace from "./LogoPlace"
import Nav from "./Nav"

function Header(){
    return(<div className={'row heder'}>
                <LogoPlace uri={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}/>
                <Nav />
            </div>);

}

export default Header;