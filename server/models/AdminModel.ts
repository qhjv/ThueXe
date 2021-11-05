import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
},{ timestamps: true })

export const AdminModel = mongoose.model('Admin', schema);