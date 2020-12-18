var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err){
        res.status(500);
        throw new Error('Failed to get all users data');
      } else {
        res.status(200);
        res.send();
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err) => {
      if (err) {
        res.status(500);
        throw new Error('Failed to create user');
      } else {
        res.status(200);
        res.send();
      }
    });
  }
};