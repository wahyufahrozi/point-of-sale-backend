const db = require("../Config/database");

module.exports = {
  loginUser: username => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM user WHERE username=?`;
      db.query(query, [username], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  getuserByUsername: username => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM user WHERE username=?`;
      db.query(query, [username], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });

      if (!err) {
      }
    });
  }
};
