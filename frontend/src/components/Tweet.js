import React, { Component } from 'react'

import api from '../services/api';
import './Tweet.css';
import like from '../like.svg';

export default class Tweet extends Component {
  handleLike = async () => {
    const { _id } = this.props.tweet;

    await api.post(`/tweets/like/${_id}`);
  }
  
  render() {
    const { tweet } = this.props;

    return (
      <li className="tweet">
        <b>{tweet.author}</b>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like"/> {tweet.likes}
        </button>
      </li>
    )
  }
}
