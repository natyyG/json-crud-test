import React from "react";

class AddContact extends React.Component{
    
    state = {
        name:"",
        disc:"",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.disc ===""){
            alert("all the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"", disc: ""})
    }
    render(){
        return(
            <form onSubmit={this.add}>
                <input type="text" name="name" placeholder="Name"
                value={this.state.name}
                onChange={(e)=> this.setState({name: e.target.value})}/>
                <input type="text" name="disc" placeholder="Description"
                value={this.state.disc}
                onChange={(e)=> this.setState({disc: e.target.value})}/>
                <button>Add</button>
            </form>
        )
    }
}
export default AddContact;