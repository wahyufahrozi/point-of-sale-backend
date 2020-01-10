const db = require("../Config/database");

module.exports = {
  getTransaction: () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM transaksi";
      db.query(query, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  postTransaction: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaksi SET ? ", [body], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
