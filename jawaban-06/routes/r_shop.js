const express = require("express");
const router = express();
const shopController = require("../controllers/c_shop");

// router => get: / 'index'
router.get("/", shopController.getIndexPage);

// router => post: /add-product 'product'
router.post("/add-product", shopController.addProductItem);

// router => post: /edit-product/:productID
router.post("/edit-product", shopController.editProductItem);

// router => post: /delete-product/:productID
router.post("/delete-product", shopController.deleteProductItem);

module.exports = router;
