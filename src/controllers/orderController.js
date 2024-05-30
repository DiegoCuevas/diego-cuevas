import Order from "../models/orderModel.js";
import handleErrors from "../utils/errorHandler.js";

export const createOrder = async (req, res) => {
  const { productList, requestedBy, status } = req.body;
  const newOrder = new Order({
    productList,
    requestedBy,
    status,
  });

  try {
    const savedOrder = await newOrder.save();
    const orderWithPopulatedFields = await Order.findById(savedOrder._id)
      .populate("productList")
      .populate("requestedBy");

    res.status(201).json(orderWithPopulatedFields);
  } catch (error) {
    handleErrors(res, 400, error.message);
  }
};

export const updateOrderStatus = async (req, res) => {
  const { status, deliveryPerson } = req.body;
  const orderId = req.params.id;
  if (![1, 2, 3].includes(status)) {
    return handleErrors(res, 400, "Estado no válido");
  }

  const updateFields = {};
  switch (status) {
    case 1:
      updateFields.receptionDate = new Date();
      updateFields.deliveryPerson = deliveryPerson;
      break;
    case 2:
      updateFields.dispatchDate = new Date();
      break;
    case 3:
      updateFields.deliveryDate = new Date();
      break;
  }

  try {
    const order = await Order.findById(orderId);
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { status, ...updateFields } },
      { new: true }
    )
      .populate("productList")
      .populate("requestedBy")
      .populate("deliveryPerson");

    if (!updatedOrder) {
      return handleErrors(res, 404, "Orden no encontrada");
    }
    if (status <= order.status) {
      return handleErrors(res, 400, "El nuevo estado debe ser mayor que el estado actual");
    }

    res.json(updatedOrder);
  } catch (error) {
    handleErrors(res, 500, error.message)
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("productList")
      .populate("requestedBy")
      .populate("deliveryPerson");
    res.json(orders);
  } catch (error) {
    handleErrors(res, 500, error.message)
  }
};
