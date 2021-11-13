import express from 'express';
import { getBill,createBill, deleteBill} from '../controllers/bill'
const router = express.Router();

router.get('/', getBill );

// router.get('/:id', getOneBill );

router.post('/', createBill );

// router.post('/update', updateBill );

router.delete('/delete/:id', deleteBill );

export default router;