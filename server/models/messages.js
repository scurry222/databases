var db = require('../db');

//con is our variable for the created connection in db

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT messages.messagetext, users.username, rooms.roomname FROM messages INNER JOIN rooms ON rooms.id=messages.roomid INNER JOIN users ON users.id=messages.userid';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log('the data result of select: ', result);
        callback(null, result);
      }
    });
  }, // a function which produces all the messages



  //pulls the created individual message from the database
  create: function (message, callback = ()=>{}) {
    //insert message obj into the messages table?
    var queryString = `INSERT INTO messages (messagetext, userid, roomname) VALUES ('${message.text}', SELECT id FROM users WHERE username = '${message.username}', SELECT id FROM rooms WHERE roomname = '${message.roomname}')`;
    //pose query to database for messages
    db.query(queryString, (err) => {
      if (err) {
        callback(err);
        throw new Error('Failure to populate messages table');
      }
    });
    db.query(qString2, (err) => {
      if (err) {
        callback(err);
      }
    });
  }
};
