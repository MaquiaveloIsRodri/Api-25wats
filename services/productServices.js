const Products = require("../libs/Data");


class productsServices {
  async findProducts() {
    return Products;
  }

}


module.exports = productsServices;

