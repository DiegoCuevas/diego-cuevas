import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import handleErrors from "../utils/errorHandler.js";
import generateToken from '../utils/generateToken.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return handleErrors(res, 400, "Usuario no encontrado");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return handleErrors(res, 400, "Contraseña incorrecta");
    }
    const token = generateToken(user._id, user.role);
    res.json({ token });
  } catch (err) {
    handleErrors(res, 500, err.message);
  }
};

export const register = async (req, res) => {
  try {
    const { workerCode, name, email, phone, position, role, password } = req.body;
    const user = new User({
      workerCode,
      name,
      email,
      phone,
      position,
      role,
      password,
    });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    handleErrors(res, 500, err.message);
  }
};

export const validateToken = (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return handleErrors(res, 401, "No token, autorización denegada");
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    res.json({ valid: true });
  } catch (err) {
    handleErrors(res, 401, "Token no válido");
  }
};
