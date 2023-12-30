const StoreDbHelper = {};
const Product = require("./model");

StoreDbHelper.saveProduct = async (product) => {
  try {
    const findExistingProduct = await Product.findOne({ name: product.name });
    if (findExistingProduct) {
      findExistingProduct.price = product.price;
      findExistingProduct.stock = product.stock;
      return await findExistingProduct.save();
    }
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (err) {
    return Promise.reject(err);
  }
};

StoreDbHelper.getAllProducts = async (req) => {
  try {
    const options = {};

    if (req.query.limit) {
      options.limit = parseInt(req.query.limit, 10);
    }

    if (req.query.page) {
      const page = parseInt(req.query.page, 10);
      const perPage = options.limit || 10;
      options.skip = (page - 1) * perPage;
    }

    const allProducts = await Product.find({}, null, options);
    return allProducts;
    return allProducts;
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = StoreDbHelper;
