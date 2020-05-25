const Tweet = require('../models/Tweet');

class TweetController {
  async index(req, res) {
    const tweets = await Tweet.find().sort('-createdAt');

    return res.json(tweets);
  }

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  }

  async like(req, res) {
    const { tweetId } = req.params;
    const tweet = await Tweet.findById(tweetId);

    tweet.likes = tweet.likes + 1;
    await tweet.save();

    req.io.emit('like', tweet);
    
    return res.json(tweet);
  }
}

module.exports = new TweetController();
