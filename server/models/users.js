var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT username FROM users';
    con.query(queryString, (err, result) => {
      if (err) {
        res.status(500);
        throw new Error('Failure to get all users data from database');
      } else {
        callback(result);
      }
    });
  },
  create: function (user, callback = () => {}) {
    var queryString = `INSERT INTO users (users.username) VALUES (${user.username})`;
    con.query(queryString, (err) => {
      if (err) {
        callback(err);
      }
    });
  }
};
