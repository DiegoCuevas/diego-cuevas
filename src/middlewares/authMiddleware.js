import jwt from "jsonwebtoken";
import handleErrors from "../utils/errorHandler.js";

export const verifyToken = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return handleErrors(res, 401, "No token, autorización denegada");
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    next();
  } catch (err) {
    handleErrors(res, 401, "Token no válido");
  }
};
