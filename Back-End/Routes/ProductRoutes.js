import express from 'express';
import {
    addProduct,
    getAllProduct,
    getProduct,
    deleteProduct,
    updateProduct

} from '../Controllers/ProductController.js';
import { authenticate, checkRole } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/add', addProduct);
router.get('/getOne/:id', getProduct);
router.get('/all/product', authenticate, checkRole([ 'admin']), getAllProduct);
router.delete('/delete/:id',authenticate,checkRole(['admin'],deleteProduct))
router.patch('/update/:id',authenticate,checkRole(['admin'],updateProduct))

export default router