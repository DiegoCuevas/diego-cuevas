import jwt from 'jsonwebtoken';

const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, 'your_jwt_secret', { expiresIn: '1h' });
};

export default generateToken;