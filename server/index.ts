import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import {connect} from './db/index';
import admin from './routers/admin';
import car from './routers/car';
import bill from './routers/bill';
import customer from './routers/customer';
// Connect to DB
connect();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/api/car', car);
app.use('/api/customer', customer);
app.use('/api/admin', admin);
app.use('/api/bill', bill);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});