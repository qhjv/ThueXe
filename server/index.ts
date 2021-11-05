import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import {connect} from './db/index';
import admin from './routers/admin';
// Connect to DB
connect();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

// app.use('/api/product', product);
app.use('/api/admin', admin);
// app.use('/api/imgdemo', imgDemo);
// app.use('/api/imgview', imgView);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});