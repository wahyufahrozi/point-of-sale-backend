const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  getuserByUsername: (res, req) => {
    const { username } = req.body;
    userModel
      .getuserByUsername(username)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  loginUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (username == null || username == undefined) {
        res.status(400).json({
          message: "username Cannot Empty"
        });
      } else if (password == null || password == undefined) {
        res.status(400).json({
          message: "password Cannot Be Empty"
        });
      } else {
        await userModel
          .loginUser(username)
          .then(response => {
            if (response.length === 0) {
              res.status(400).json({
                message: `user with Username ${username} Not Found`
              });
            } else {
              if ((password, response[0].password)) {
                console.log("ini resepon", response);
                let token = jwt.sign(
                  {
                    response: response[0]
                  },
                  process.env.SECRET_KEY,
                  {
                    expiresIn: "60m"
                  }
                );
                res.json({
                  sucess: true,
                  err: null,
                  token
                });
              } else {
                res.status(400).json({
                  message: "Wrong Password or Username"
                });
              }
            }
          })
          .catch(err => {
            res.json(err);
          });
      }
    } catch (err) {
      next(err);
    }
  }
};
