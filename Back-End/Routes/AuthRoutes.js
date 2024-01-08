import express from 'express';
import { authenticate } from '../Middlewares/authMiddleware';
import {
    signup,
    login,
    loggedInUser


} from '../Controllers/AuthController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/login-user', authenticate, loggedInUser);


export default router