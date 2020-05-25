import React, { Component } from 'react'

import api from '../services/api';
import Tweet from '../components/Tweet';
import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: '',
  };

  async componentDidMount() {
    const res = await api.get('/tweets');

    this.setState({ tweets: res.data });
  }

  handleInputChange = event => {
    this.setState({ newTweet: event.target.value });
  }

  handleNewTweet = async event => {
    event.preventDefault();

    const content = this.state.newTweet;
    const author = localStorage.getItem('@twitter-clone:username');

    await api.post('/tweets', { content, author });

    this.setState({ newTweet: '' });
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

        <ul className="tweet-list">
          { this.state.tweets.map(tweet => (
              <Tweet key={tweet._id} tweet={tweet}/>
            ))
          }
        </ul>
      </div>
    )
  }
}
