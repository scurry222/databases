var models = require('../models');

module.exports = {
  get: function (req, res) {

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req, res);
    res.send();
    //have formatted message object
    // call the model method create to put message obj in to the database
  } // a function which handles posting a message to the database
};
