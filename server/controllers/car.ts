import { CarModel } from '../models/CarModel'
import { Router, Request, Response } from 'express';

export const getCar = async (req:Request, res:Response)=>{
    try {
        const car = await CarModel.find();
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const getOneCar = async (req:Request, res:Response)=>{
    try {
        const carId = { _id: req.params.id}
        const oneCar = await CarModel.findById(carId);
        res.status(200).json(oneCar);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const createCar = async (req:Request, res:Response)=>{
    try {
        const newCar = req.body;
        const setName = req.body.name;
        const name = await CarModel.findOne({ setName })
        const car = new CarModel(newCar);
        await car.save();

        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Chưa điền đầy đử thông tin !!!' });
    }
};

export const updateCar = async (req:Request, res:Response)=>{
    try {
        const updateCar = req.body;
		const car = await CarModel.findOneAndUpdate(
            { _id: updateCar._id },
            updateCar,
            { new: true }
        );

        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteCar = async (req:Request, res:Response)=>{
    try {
        const carDelete = { _id: req.params.id}
		const deletedCar = await CarModel.findOneAndDelete(carDelete)

		if (!deletedCar)
			return res.status(401).json({
				success: false,
				message: 'Xe không được tìm thấy hoặc người dùng không được ủy quyền'
			})

		res.json({ success: true, post: deletedCar })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};