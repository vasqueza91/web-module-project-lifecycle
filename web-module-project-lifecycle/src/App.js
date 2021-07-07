import React from 'react';
import User from './Components/User';
import FollowerList from './Components/FollowerList';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    user: 'vasqueza91',
    userInfo: {},
    followers: []
  }

  getFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        console.log(res)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    console.log(this.state);

    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          userInfo: res.data
        })
        console.log(this.state)
        this.getFollowers();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return (
      <div className="App">
        <User info={this.state.userInfo} />
        <FollowerList followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
