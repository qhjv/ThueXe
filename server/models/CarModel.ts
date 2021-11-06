import mongoose from 'mongoose';
import dotenv from 'dotenv'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    failure: {
        type: String,
    },
    licensePlate: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    company: {
        type: String,
    },
    status: {
        type: Boolean,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
},{ timestamps: true })

export const CarModel = mongoose.model('Car', schema);