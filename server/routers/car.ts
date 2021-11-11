import express from 'express';
import { getCar,getOneCar,createCar,updateCar, deleteCar} from '../controllers/car'
const router = express.Router();

router.get('/', getCar );

router.get('/:id', getOneCar );

router.post('/', createCar );

router.post('/update', updateCar );

router.delete('/delete/:id', deleteCar );

export default router;