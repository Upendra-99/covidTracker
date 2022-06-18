const mongoose = require("mongoose");

class mongo {
  constructor() {
    this.mongodbconnection();
  }
  mongodbconnection() {
    mongoose
      .connect(
        "mongodb+srv://upendraDb:upendraDb@cluster0.yvi9y.mongodb.net/covidTrack?retryWrites=true&w=majority"
      )
      .then((res) => console.log("Mongodb is Connected"))
      .catch((err) => console.log("Error in Mongodb Connection"));
  }
}

module.exports = mongo;
