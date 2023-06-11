const mongoose = require('mongoose');
require('dotenv').config()
console.log(require('dotenv').config());

mongoose.connect(`${process.env.MONGODB_URI}`);

module.exports = mongoose.connection;