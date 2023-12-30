const StoreDbHelper = require("./dbHelper");
const StoreViewModel = require("./viewModel");
const StoreController = {};

StoreController.createNewProduct = async (req) => {
  try {
    if (!req.body || !req.body.name || !req.body.price || !req.body.image) {
      throw new Error("Incomplete information");
    }
    const createViewModel = StoreViewModel.createViewModel(req);
    const newProduct = await StoreDbHelper.saveProduct(req, createViewModel);
    return newProduct;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

StoreController.getAllProducts = async (req) => {
  try {
    const allProducts = await StoreDbHelper.getAllProducts(req);
    return allProducts;
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = StoreController;
