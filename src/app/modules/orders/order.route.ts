import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', OrderController.createOrder);

router.get('/:orderId', OrderController.getSingleOrder);
router.get('/customer/:email', OrderController.getCustomerOwnOrder);
router.put('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);
router.get("/revenue", OrderController.getRevenue)

router.get('/', auth('admin'), OrderController.getAllOrders);

router.post('/payment/create-payment-intent', OrderController.createPaymentIntent);

export const OrderRoutes = router;
