import mongoose from 'mongoose';
import dotenv from 'dotenv'

const schema = new mongoose.Schema({
    
    billCode: {
        type: String,
        required: true,
        unique:true
    },
    carCode: {
        type: String,
        required: true,
    },
    customerCode: {
        type: String,
        required: true,
    },
    carName: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    startDay: {
        type: String,
        required: true,
    },
    endDay: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    deposit: {
        type: String,
        required: true,
    },
    totalMoney: {
        type: String,
        required: true,
    },
},{ timestamps: true })

export const BillModel = mongoose.model('Bill', schema);