const StoreViewModel = {};

StoreViewModel.createViewModel = ({ body }) => {
  return {
    name: body?.name,
    price: body?.price,
    image: body?.image,
    stock: body?.stock || 1,
  };
};

module.exports = StoreViewModel;
