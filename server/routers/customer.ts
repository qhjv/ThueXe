import express from 'express';
import { getCustomer,getOneCustomer,createCustomer,updateCustomer, deleteCustomer} from '../controllers/customer'
const router = express.Router();

router.get('/', getCustomer );

router.get('/:id', getOneCustomer );

router.post('/', createCustomer );

router.post('/update', updateCustomer );

router.delete('/delete/:id', deleteCustomer );

export default router;