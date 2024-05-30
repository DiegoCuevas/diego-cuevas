import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  productList: [
    { type: Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  requestedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3], // 0: Por atender, 1: En proceso, 2: En delivery, 3: Recibido
    default: 0,
  },
  deliveryPerson: { type: Schema.Types.ObjectId, ref: "User" },
  orderDate: { type: Date },
  receivedDate: { type: Date },
  dispatchDate: { type: Date },
  deliveryDate: { type: Date },
});

const Order = model("Order", orderSchema);

export default Order;
