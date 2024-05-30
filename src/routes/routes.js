import { Router } from 'express';
import * as productController from '../controllers/productController.js';
import * as orderController from '../controllers/orderController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
import * as authController from '../controllers/authController.js';

const router = Router();

router.get('/products', authMiddleware.verifyToken, productController.getAllProducts);

router.post('/order', authMiddleware.verifyToken, orderController.createOrder);
router.put('/order/:id/status', authMiddleware.verifyToken, orderController.updateOrderStatus);
router.get('/orders', authMiddleware.verifyToken, orderController.getAllOrders);

router.post('/login', authController.login);
router.get('/validateToken', authController.validateToken);
router.post('/register', authController.register);

export default router;
