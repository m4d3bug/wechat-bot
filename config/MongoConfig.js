const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/botqq';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;


module.exports = {
    mongoose: mongoose
}

