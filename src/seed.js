import mongoose from 'mongoose';
import Product from './models/productModel.js';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos", err));

const seedProducts = [
  {
    sku: "P001",
    name: "Producto 1",
    type: "Tipo 1",
    tags: ["tag1", "tag2"],
    price: 10,
    unit: "unidad",
  },
  {
    sku: "P002",
    name: "Producto 2",
    type: "Tipo 2",
    tags: ["tag2", "tag3"],
    price: 20,
    unit: "unidad",
  },
];

const seedProductsDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log("Datos de prueba de productos creados exitosamente");
  } catch (err) {
    console.error("Error al crear datos de prueba de productos", err);
  } finally {
    mongoose.connection.close();
  }
};

seedProductsDB();
