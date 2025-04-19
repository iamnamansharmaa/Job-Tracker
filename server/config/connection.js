const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://itsnamansharma1:paaooVL5qUDAt8MF@jobtracker.uge0ouo.mongodb.net/?retryWrites=true&w=majority&appName=jobTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true
});

module.exports = mongoose.connection;
