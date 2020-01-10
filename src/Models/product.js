const db = require("../Config/database");

const sortBy = (req, sql) => {
  const sortBy = req.query.sortby;
  const orderBy = req.query.orderby;

  if (sortBy == "name") {
    sql += ` ORDER BY product.name `;
  } else if (sortBy == "category") {
    sql += ` ORDER BY category.name `;
  } else if (sortBy == "updated") {
    sql += ` ORDER BY product.updated_at `;
  } else {
    sql += ` ORDER BY product.id `;
  }

  if (sortBy != null) {
    if (orderBy == "asc" || orderBy == null) {
      sql += "ASC";
    } else if ("desc") {
      sql += "DESC";
    }
  }

  return sql;
};

const searchProduct = (req, sql) => {
  const keyword = req.query.search;

  if (keyword != null) {
    sql += ` AND product.name LIKE ? `;
  }

  return {
    sql,
    keyword
  };
};
exports.getProduct = (req, res) => {
  return new Promise((resolve, reject) => {
    // const productId =
    //   req.params.product_id || orderProductId || req.body.product_id;
    const sql = `SELECT * FROM product ORDER BY id DESC `;

    db.query(sql, (err, result) => {
      if (!err) resolve(result);
      else reject(err);
    });
  });
};
(exports.getByname = name => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM product WHERE name LIKE CONCAT('%', ?,  '%')";
    db.query(sql, [name], (err, results) => {
      if (!err) {
        resolve(results);
      } else {
        reject(err);
      }
    });
  });
}),
  // exports.getProduct = (req, page) => {
  //   let sql = `SELECT * from product `;
  // return new Promise
  //   const query = searchProduct(req, sql);
  //   sql = sortBy(req, query.sql);

  //   return new Promise((resolve, reject) => {
  //     getMaxPage(page, query.keyword, "product")
  //       .then(TotalPage => {
  //         const infoPage = {
  //           currentPage: page.page,
  //           total: TotalPage.totalProduct,
  //           TotalPage: TotalPage.TotalPage
  //         };

  //         db.query(
  //           `${sql} LIMIT ? OFFSET ? `,
  //           query.keyword == null
  //             ? [page.limit, page.offset]
  //             : ["%" + query.keyword + "%", page.limit, page.offset],
  //           (err, data) => {
  //             if (!err)
  //               resolve({
  //                 infoPage,
  //                 data
  //               });
  //             else reject(err);
  //           }
  //         );
  //       })
  //       .catch(err => reject(err));
  //   });

  (exports.getProductById = (req, orderProductId) => {
    return new Promise((resolve, reject) => {
      const productId =
        req.params.product_id || orderProductId || req.body.product_id;
      const sql = `SELECT * FROM product WHERE id=? `;

      db.query(sql, [productId], (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      });
    });
  });

exports.getProductByName = req => {
  return new Promise((resolve, reject) => {
    const prodName = req.body.name || req.params.name;

    db.query(
      `SELECT * FROM product WHERE name=? `,
      [prodName],
      (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      }
    );
  });
};
exports.getProductByCategory = req => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM product WHERE category_name=? `),
      [req.body.category_name],
      (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      };
  });
};

exports.newProduct = req => {
  const body = req.body;
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO product SET name=?, image=?,category=?, price=? `,

      [body.name, body.image, body.category, body.price],
      (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      }
    );
  });
};

exports.updateProduct = req => {
  const body = req.body;
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE product SET name = ?, image = ?,category = ?, price = ? WHERE id = ? `,

      [body.name, body.image, body.category, body.price, req.params.product_id],
      (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      }
    );
  });
};

exports.deleteProduct = req => {
  return new Promise((resolve, reject) => {
    const productId = req.params.product_id;

    db.query(
      `DELETE FROM product WHERE id = ? `,
      [productId],
      (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      }
    );
  });
};
