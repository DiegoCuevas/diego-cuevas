import Product from "../models/productModel.js";
import handleErrors from "../utils/errorHandler.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    handleErrors(res, 500, "Ocurrió un error al obtener los productos");
  }
};
