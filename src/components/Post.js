import React from "react"

function Edititem(props){
    return(
        <div className={"mb-2 mt-2"}>
            <textarea  className="form-control" onChange={props.onChange}
                       id="titleText"
                       rows="3" value={props.value}>
            </textarea>
            <button className={"btn btn-danger"} onClick={props.onClick}>Save {props.title}</button>
        </div>
    )
}


class Post extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            editTitle : false,
            editBody: false,
            body: "", //this.props.body,
            title: "" // this.props.title
        };

        this.handleTitleEdit = this.handleTitleEdit.bind(this);
        this.handleBodyEdit = this.handleBodyEdit.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getBody = this.getBody.bind(this);
    }

    componentDidMount() {
        this.setState({
            body: this.props.body,
            title: this.props.title
        })
    }

    handleTitleEdit (){
        this.setState(state => ({
            editTitle: !state.editTitle,
        }));
    }
    handleBodyEdit (){
        this.setState(state => ({
            editBody: !state.editBody,
        }));
    }

    getTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    getBody(e){
        this.setState({
            body: e.target.value
        })
    }



    render(){
       return (
        <div className="col-lg-6 col-md-8 mb-5 " key={this.props.id} id={this.props.id}>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid"
                         alt={"hello"}/>
                </div>
                <div className="card-body">
                        {!this.state.editTitle
                            ? <h5 className="card-title" onDoubleClick={this.handleTitleEdit} >{this.state.title}</h5>
                            : <Edititem onChange={(e)=>this.getTitle(e)}
                                        value={this.state.title}
                                        onClick={this.handleTitleEdit}
                                        title={"Title"}
                            />
                        }
                       {!this.state.editBody
                           ? <p className="card-text" onDoubleClick={this.handleBodyEdit}>{this.state.body}</p>
                           : <Edititem onChange={(e)=>this.getBody(e)}
                                       value={this.state.body}
                                       onClick={this.handleBodyEdit}
                                       title={"Body"}
                           />
                       }
                    <a className="btn btn-primary" >Read more</a>
                </div>
            </div>
        </div>
       )
    }

}


export default Post

