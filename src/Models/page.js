const db = require("../Config/database");

exports.pagination = req => {
  const limit = Number(req.query.perpage) || 9;
  const page = Number(req.query.page) || 1;
  const offset = limit * (page - 1);

  return {
    limit,
    offset,
    page
  };
};

exports.getMaxPage = (page, keyword, table) => {
  return new Promise((resolve, reject) => {
    if (keyword != null) table += " WHERE name LIKE ?";
    db.query(
      `SELECT COUNT(*) as total FROM \`${table}\``,
      ["%" + keyword + "%"],
      (err, result) => {
        if (!err) {
          const TotalPage = Math.ceil(result[0].total / page.limit);
          console.log(page.page);

          if (TotalPage >= page.page) {
            resolve({
              totalProduct: result[0].total,
              TotalPage
            });
          } else {
            reject(`Im sorry only until page ${TotalPage}`);
          }
        } else reject(err);
      }
    );
  });
};
