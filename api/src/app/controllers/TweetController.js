const Tweet = require('../models/Tweet');

class TweetController {
  async index(req, res) {
    const tweets = await Tweet.find().sort('-createdAt');

    return res.json(tweets);
  }

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    return res.json(tweet);
  }

  async like(req, res) {
    const { tweetId } = req.params;
    const tweet = await Tweet.findById(tweetId);

    tweet.likes = tweet.likes + 1;
    await tweet.save();
    
    return res.json(tweet);
  }
}

module.exports = new TweetController();
