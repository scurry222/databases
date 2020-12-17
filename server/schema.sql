CREATE DATABASE IF NOT EXISTS chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE IF NOT EXISTS rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL AUTO_INCREMENT,
  userid INT NOT NULL,
  roomid INT NOT NULL,
  messagetext VARCHAR(255),
  timedate DATETIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userid)
    REFERENCES users(id),
  FOREIGN KEY (roomid)
    REFERENCES rooms(id)
);

SELECT rooms.roomname
FROM rooms
INNER JOIN messages ON rooms.id=messages.roomid;

SELECT users.username
FROM users
INNER JOIN messages ON users.id=messages.userid;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

