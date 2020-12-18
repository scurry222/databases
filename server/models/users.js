var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT username FROM users';
    db.query(queryString, (err, result) => {
      if (err) {
        res.status(500);
        throw new Error('Failure to get all users data from database');
      } else {
        callback(null, result);
      }
    });
  },
  create: function (user, callback = () => {}) {
    var queryString = `INSERT INTO users (username) VALUES ('${user.username}')`;
    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        callback(err);
      }
    });
  }
};
