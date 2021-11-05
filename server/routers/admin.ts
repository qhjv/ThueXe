import express from 'express';
import { getAdmin,login } from '../controllers/admin'
const router = express.Router();

router.get('/', getAdmin );
router.post('/', login );

export default router;