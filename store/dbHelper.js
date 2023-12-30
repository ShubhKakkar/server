const StoreDbHelper = {};
const Product = require("./model");

StoreDbHelper.saveProduct = async (req, product) => {
  try {
    const findExistingProduct = await Product.findOne({ name: product.name });
    if (findExistingProduct) {
      findExistingProduct.price = product.price;
      findExistingProduct.stock = product.stock;
      findExistingProduct.categoryList = product.categoryList;
      req.io.emit("updatedProduct", findExistingProduct);
      return await findExistingProduct.save();
    }
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    req.io.emit("newProduct", savedProduct);
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

    const [allProducts, totalCount] = await Promise.all([
      Product.find({}, null, options),
      Product.countDocuments({}),
    ]);

    return { allProducts, totalCount };
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = StoreDbHelper;
