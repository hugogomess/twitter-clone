import React, { Component } from 'react'

import './Timeline.css';
import twitterLogo from '../twitter.svg';

export default class Timeline extends Component {
  state = {
    newTweet: '',
  };

  handleInputChange = event => {
    this.setState({ newTweet: event.target.value });
  }

  handleNewTweet = event => {
    event.preventDefault();

    const content = this.state.newTweet;
    const author = localStorage.getItem('@twitter-clone:username');

    console.log(content, author);
  }
  
  render() {
    return (
      <div className="timeline-wrapper">
        <img src={twitterLogo} alt="twitter-logo" height={24}/>

        <form onSubmit={this.handleNewTweet}>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            placeholder="What's happening?"
          />
          <button type="submit">Tweet</button>
        </form>
      </div>
    )
  }
}
