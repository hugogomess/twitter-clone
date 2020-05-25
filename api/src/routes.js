const express = require('express');
const TweetController = require('./app/controllers/TweetController');

const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.get('/tweets/like/:tweetId', TweetController.like);

module.exports = routes;
