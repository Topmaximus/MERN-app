require('dotenv').config();

let ENV = {};
ENV.MONGO_URI = process.env.MONGO_URI;
module.exports = ENV;
