import React from "react";
import Header from "./Header"
import Post from "./Post"

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            items : []
        });
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

    render(){
        const items = this.state.items;
        return(

            <div className={"container"}>
                <Header/>
                <div className={'row'}>
                        {items.map(item => (
                            <Post key={item.id} id={item.id} body={item.body} title={item.title}/>
                        ))}
                </div>
            </div>
        )
    }
}



export default Posts