import { BillModel } from '../models/BillModel'
import { CarModel } from '../models/CarModel'
import { CustomerModel } from '../models/CustomerModel'
import { Router, Request, Response } from 'express';

export const getBill = async (req:Request, res:Response)=>{
    try {
        const bill = await BillModel.find();
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const createBill = async (req:Request, res:Response)=>{
    try {
        const newBill = req.body;
        const setStartDay = req.body.startDay;
        const setEndDay = req.body.endDay;
        const setCarCode = req.body.carCode;
        const startDay = await BillModel.findOne({ setStartDay });
        const endDay = await BillModel.findOne({ setEndDay });
        const carCode = await BillModel.findOne({ setCarCode });
        const carUpdate = { _id: req.body.carCode}
        const customerUpdate = { _id: req.body.customerCode}
        // BillModel.counterReset('id', function(err) {
        //     // Now the counter is 0
        // });
		if (!setStartDay || !setEndDay){
            return res
            .status(400)
            .json({ success: false, message: 'Chưa chọn ngày !!!' })
        }else if(!setCarCode){
            return res
            .status(400)
            .json({ success: false, message: 'Chưa chọn xe thuê !!!' })
        }else{
            const bill = new BillModel(newBill);
            const updateCar = await CarModel.findOneAndUpdate(carUpdate,{
                status:true
            })
            const updateCustomer = await CustomerModel.findOneAndUpdate(customerUpdate,{
                status:true
            })
            await bill.save();
    
            res.status(200).json(bill);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const deleteBill = async (req:Request, res:Response)=>{
    try {
        const billDelete = { _id: req.params.id}
        const carUpdate = { _id: req.body.carCode}
        const customerUpdate = { _id: req.body.customerCode}
		const deletedBill = await BillModel.findOneAndDelete(billDelete)
		const updateCar = await CarModel.findOneAndUpdate(carUpdate,{
            status:false
        })
		const updateCustomer = await CustomerModel.findOneAndUpdate(customerUpdate,{
            status:false
        })

		res.json({ success: true, post: deletedBill })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};