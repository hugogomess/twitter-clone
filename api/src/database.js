const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongoConnect();
  }

  mongoConnect() {
    const mongoUrl = process.env.MONGO_URL;

    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = new Database();
