const orderModel = require("../Models/order");
module.exports = {
  getTransaction: (req, res) => {
    orderModel
      .getTransaction()
      .then(response => {
        res.json({
          total: response.length,
          status: 200,
          result: response
        });
      })
      .catch(err => res.json(err));
  },
  postTransaction: (req, res) => {
    const body = {
      ...req.body
    };
    orderModel
      .postTransaction(body)
      .then(response =>
        res.json({
          status: 201,
          result: body
        })
      )
      .catch(err => console.log(err));
  }
};
