import React, { Component } from 'react'

import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {
  state = {
    username: '',

  }

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@twitter-clone:username', username);

    this.props.history.push('/timeline');
  }

  handleInputChange = event => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="twitter-logo"/>
        <form onSubmit={this.handleSubmit}>
          <input
          value={this.state.username}
          type="text" placeholder="Username"
          onChange={this.handleInputChange}/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
