import { CustomerModel } from '../models/CustomerModel'
import { Router, Request, Response } from 'express';

export const getCustomer = async (req:Request, res:Response)=>{
    try {
        const customer = await CustomerModel.find();
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const getOneCustomer = async (req:Request, res:Response)=>{
    try {
        const customerId = { _id: req.params.id}
        const oneCustomer = await CustomerModel.findById(customerId);
        res.status(200).json(oneCustomer);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
export const createCustomer = async (req:Request, res:Response)=>{
    try {
        const newCustomer = req.body;
        const setName = req.body.name;
        const name = await CustomerModel.findOne({ setName })
        const customer = new CustomerModel(newCustomer);
        await customer.save();

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Chưa điền đầy đử thông tin !!!' });
    }
};

export const updateCustomer = async (req:Request, res:Response)=>{
    try {
        const updateCustomer = req.body;
		const customer = await CustomerModel.findOneAndUpdate(
            { _id: updateCustomer._id },
            updateCustomer,
            { new: true }
        );

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteCustomer = async (req:Request, res:Response)=>{
    try {
        const customerDelete = { _id: req.params.id}
		const deletedCustomer = await CustomerModel.findOneAndDelete(customerDelete)

		if (!deletedCustomer)
			return res.status(401).json({
				success: false,
				message: 'Xe không được tìm thấy hoặc người dùng không được ủy quyền'
			})

		res.json({ success: true, post: deletedCustomer })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
