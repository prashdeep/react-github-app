import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layouts/Alert';

class  App extends Component {

  state={
    users:[],
    loading:false,
    alert:null
  }

  searchUsers = async  (user)=>{
    console.log(`inside the search users ${user}`)
    this.setState({loading:true});
    const response = await axios.get(`https://api.github.com/search/users?q=${user}`);
    this.setState({users:response.data.items, loading:false});
    console.log(response.data)
   
  }

  clearUsers = () => {
    this.setState({users:[], loading:false});
  }

  setAlert = (message, type) => {
    this.setState({alert:{message, type}})
    setTimeout(()=> this.setState({alert:null}), 5000);
  }

 /*async componentDidMount(){
   this.setState({loading:true});
   const response = await axios.get('https://api.github.com/users');
   this.setState({users: response.data, loading:false});
  }*/

  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  setAlert={this.setAlert}
                  showClear={this.state.users.length > 0}/>
          <Users loading={this.state.loading} users={this.state.users}/>   
        </div>
      </div>
    );
  }
}

export default App;
