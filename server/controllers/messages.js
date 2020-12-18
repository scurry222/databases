var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.status(500);
        throw new Error('Failed to get all messages');
      } else {
        res.status(200);
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages

  post: function (req, res) {
    models.messages.create(req.body, (err) => {
      if (err) {
        res.status(500);
        throw new Error('Failed to create message');
      } else {
        res.status(201);
        res.send();
      }
    });
  } // a function which handles posting a message to the database
};
