import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Search extends Component {
     state = {
        username:''
     }

     static propTypes={
         searchUser:PropTypes.func.isRequired,
         clearUsers: PropTypes.func.isRequired,
         showClear:PropTypes.bool.isRequired,
         setAlert:PropTypes.func.isRequired
     }

     onSubmit = (e) => {
        e.preventDefault();
        if(this.state.username === ''){
            this.props.setAlert('Please enter the name ','light');
        }else {
            this.props.searchUsers(this.state.username);
            this.setState({username:''});
        }
     }
     onChange = (e)=>{
         console.log('came insdie the con chane event '+ e.target.value)
        this.setState({username:e.target.value});
     }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="Enter username"/>

                    <input type="submit" className="btn btn-dark btn-block"/>
                </form>  
                {this.props.showClear && <button onClick = {this.props.clearUsers} className="btn btn-light btn-block">Clear</button> } 
                             
            </div>
        )
    }
}

export default Search
