const dbConnection = require("../utils/connection");

// module read product item list
exports.getIndexPage = (req, res, next) => {
  let dataCashier = [];
  let dataCategory = [];

  dbConnection.query("SELECT * FROM t_cashier", (err, data) => {
    dataCashier = data;
  });
  dbConnection.query("SELECT * FROM t_category", (err, data) => {
    dataCategory = data;
  });

  dbConnection.query(
    "SELECT p.*, k.name as category, c.name as cashier FROM t_product p INNER JOIN t_category k ON p.id_category = k.id INNER JOIN t_cashier c ON p.id_cashier = c.id",
    (err, data) => {
      res.render("index", {
        pageTitle: "Arkademy Coffee Shop",
        dataProduct: data,
        dataCashier,
        dataCategory
      });
    }
  );
};

// module create product item
exports.addProductItem = (req, res, next) => {
  const id_category = req.body.id_category;
  const id_cashier = req.body.id_cashier;
  const price = req.body.price;
  const name = req.body.name;
  dbConnection.query(
    "INSERT INTO t_product SET?",
    {
      name,
      price,
      id_category,
      id_cashier
    },
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
};

// module edit product item
exports.editProductItem = (req, res, next) => {
  const id = req.body.id;
  const product_name = req.body.name;
  const price = req.body.price;
  const category = req.body.id_category;
  const cashier = req.body.id_cashier;
  const updateQuery = `UPDATE t_product SET name=?, price=?, id_category=?, id_cashier=? WHERE id=?`;
  const data = [product_name, price, category, cashier, id];
  dbConnection.query(updateQuery, data, (err, result) => {
    if (err) throw err;
    res.redirect("/");
    console.log("Product is updated");
  });
};

// module delete product item
exports.deleteProductItem = (req, res, next) => {
  const id = req.body.id;
  dbConnection.query(
    "DELETE FROM t_product WHERE ?",
    {
      id
    },
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
      console.log("One product item is deleted!");
    }
  );
};
