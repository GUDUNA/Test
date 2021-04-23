import React from "react"


class Post extends React.Component{
    constructor (props){
        super(props);
        this.state = ({

        });


    }

    render(){
       return (
           <div className="col-lg-4 col-md-6 mb-4" key={this.props.id} id={this.props.id}>
               <div className="card">
                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                       <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" alt={"hello"}/>
                   </div>
                   <div className="card-body">
                       <h5 className="card-title">{this.props.title}</h5>
                       <p className="card-text">
                           {this.props.body}
                       </p>
                       <a href="#" className="btn btn-primary">Edit</a>
                   </div>
               </div>
           </div>
       )
    }

}


export default Post

