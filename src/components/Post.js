import React from "react"


class Post extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            edit : false,
            body: "", //this.props.body,
            title: "" // this.props.title
        };
        this.handleClick = this.handleClick.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getBody = this.getBody.bind(this);
    }

    componentDidMount() {
        this.setState({
            body: this.props.body,
            title: this.props.title
        })
    }

    handleClick (e){
        e.preventDefault();
        this.setState(state => ({
            edit: !state.edit
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
                        {!this.state.edit
                            ? <h5 className="card-title">{this.state.title}</h5>
                            : <textarea  onChange={(e)=>this.getTitle(e)}
                                         className="form-control"
                                         id="titleText"
                                         rows="3" value={this.state.title}>
                              </textarea>
                        }
                       {!this.state.edit
                           ? <p className="card-text">{this.state.body}</p>
                           : <textarea  onChange={(e)=>this.getBody(e)}
                                        className="form-control mt-2"
                                        id="bodyText"
                                        rows="3" value={this.state.body}>
                            </textarea>

                       }
                </div>
                <button className="btn btn-primary" onClick={this.handleClick}>{this.state.edit ? "Save" : "Edit"}</button>
            </div>
        </div>
       )
    }

}


export default Post

