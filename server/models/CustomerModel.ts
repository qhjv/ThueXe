import mongoose from 'mongoose';
import dotenv from 'dotenv'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    
},{ timestamps: true })

export const CustomerModel = mongoose.model('Customer', schema);