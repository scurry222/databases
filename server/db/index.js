var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user 'root', no password,
// and to the database 'chat'.
//module.export {}

var con = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  database: 'chat',
  password: 'student'
});

con.connect((err) => {
  if (err) {
    console.log('error occured: ', err);
  } else {
    console.log('Connected');
  }
});

module.exports = con;