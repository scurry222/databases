var db = require('../db');
//con is our variable for the created connection in db

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT messages.messagetext, users.username, rooms.roomname FROM messages INNER JOIN rooms ON rooms.id=messages.roomid INNER JOIN users ON users.id=messages.userid';
    con.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(result);
      }
    });
  }, // a function which produces all the messages



  //pulls the created individual message from the database
  create: function (message, callback = ()=>{}) {
    //insert message obj into the messages table?
    var queryString = `INSERT INTO messages (messagetext, timedate) VALUES (${message.text}, ${message.dateTime})`;
    var qString2 = `INSERT INTO rooms (roomname) VALUES (${message.roomname})`;
    //pose query to database for messages
    con.query(queryString, (err) => {
      if (err) {
        callback(err);
        throw new Error('Failure to populate messages table');
      }
    });
    con.query(qString2, (err) => {
      if (err) {
        callback(err);
      }
    });
  }
};
