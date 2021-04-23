import React from 'react'


function LogoPlace(props){
    return(
        <div className={'logo col-3'}>
            <img src={props.uri} alt="SiteLogo"/>
        </div>
    );
}

export default LogoPlace