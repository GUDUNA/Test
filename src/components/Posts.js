import React from "react";
import Header from "./Header"
import Post from "./Post"
import Sidenav from "./Sidenav"

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            menuOpen: false
        };
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/posts')
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        items : result
                    });
                });
    }

    handleMenuOpen(){
        this.setState({
            menuOpen: !this.state.menuOpen
        })
        console.log(this.state.menuOpen)
    }

    render(){
        const items = this.state.items;
        return(
            <div className={this.state.menuOpen ?  "container margin-left": "container"} >
                <span className={"burger"} onClick={this.handleMenuOpen}>&#9776;</span>
                <Sidenav class={this.state.menuOpen ? "navMenuOpen sidenav" : "sidenav"} click={this.handleMenuOpen}/>
                <Header/>
                <div className={'row'}>
                    {items.map(item => (<Post key={item.id} id={item.id} body={item.body} title={item.title}/>))}
                </div>
                <div>pagination</div>
            </div>
        )
    }
}



export default Posts