import { AdminModel } from '../models/AdminModel'
import { Router, Request, Response } from 'express';

export const getAdmin = async (req:Request, res:Response)=>{
    try {
        const admin = await AdminModel.find();
        console.log(admin);
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({error:error});
    }
};
export const login = async (req:Request, res:Response)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"Tài khoản hoặc mật khẩu không được để trống !!!"
        })
    }
    try {
        const user = await AdminModel.findOne({username})
        if(!user) 
        return res.status(400).json({
            success:false,
            message:"Tài khoản hoặc mật khẩu không đúng!!!"
        })

        const pass = await AdminModel.findOne({password})
        if(!pass) 
        return res.status(400).json({
            success:false,
            message:"Mật khẩu không đúng!!!"
        })

        res.json({
			success: true,
			message: 'Đăng nhập thành công',
            isActive:true
		})
    } catch (error) {
        res.status(500).json({error:error});
    }
};