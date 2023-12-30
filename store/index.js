const express = require("express");
const StoreController = require("./controller");
const StoreRouter = express.Router();

StoreRouter.get("/get-all-products", async (req, res) => {
    await StoreController.getAllProducts(req)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json(err));
});

StoreRouter.post("/add-product", async(req, res) => {
    await StoreController.createNewProduct(req)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

module.exports = StoreRouter;
