import express from 'express';
import {subscribe, getAllUsers} from '../controllers/userController.js';
const router = express.Router();

router.get('/', getAllUsers);
router.post('/subscribe', subscribe);

export default router;