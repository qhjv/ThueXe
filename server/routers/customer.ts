import express from 'express';
import { getCustomer,createCustomer,updateCustomer, deleteCustomer} from '../controllers/customer'
const router = express.Router();

router.get('/', getCustomer );

router.post('/', createCustomer );

router.post('/update', updateCustomer );

router.delete('/:id', deleteCustomer );

export default router;