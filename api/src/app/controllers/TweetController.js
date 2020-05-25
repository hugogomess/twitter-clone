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
}

module.exports = new TweetController();
