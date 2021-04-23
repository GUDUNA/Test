import React from "react";
import Header from "./Header"

function Sides(props){
    return(
          <div className={props.clas}>{props.menu}</div>
        );
}

function Postebi(props){
    return(
        <div className={props.cls}>
            <p>
                {props.message}
            </p>
        </div>
    )
}


class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            greetings: 'Postebi'
        });
    }

    render(){
        return(

            <div className={"container"}>
                <Header/>
                <div className={'row'}>
                    <Sides clas={"col-3 Lbar"} menu={'Left Sidebar'}/>
                    <Postebi cls={"col Postebi"} message={this.state.greetings}/>
                    <Sides clas={"col-3 Rbar"} menu={"Right Sidebar"}/>
                </div>
            </div>
        )
    }
}



export default Posts