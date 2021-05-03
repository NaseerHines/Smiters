const mysql = require('mysql');
const util = require('util');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'smiters';

const connection = mysql.createConnection({
  host: process.env.HOST || DB_HOST,
  user: process.env.USER_NAME || DB_USER,
  password: process.env.USER_PASS || DB_PASS,
  database: process.env.DATABASE || DB_NAME,
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});

const postUser = (username, platform, kd, wl, playtime) => {
  const mysqlQuery = 'INSERT INTO USERS VALUES(null, ?, ?, ?, ?, ?);';
  return query(mysqlQuery, [username, platform, kd, wl, playtime]);
};

const getUser = (username) => {
  const mysqlQuery = 'SELECT * FROM USERS WHERE username = ?;';
  return query(mysqlQuery, [username]);
};

const updateUser = (username, platform, kd, wl, playtime) => {
  const mysqlQuery = 'UPDATE USERS SET kd = ?, wl = ?, playtime = ?;';
  return query(mysqlQuery, [kd, wl, playtime]);
};


module.exports = {
  postUser,
  getUser,
  updateUser
};