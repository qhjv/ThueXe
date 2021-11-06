import express from 'express';
import { getCar,createCar,updateCar, deleteCar} from '../controllers/car'
const router = express.Router();

router.get('/', getCar );

router.post('/', createCar );

router.post('/update', updateCar );

router.delete('/:id', deleteCar );

export default router;