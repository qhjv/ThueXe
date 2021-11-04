import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const URI = process.env.DATABASE_URL;
export async function connect () {
    try {
        await mongoose.connect((URI:String), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log("kết nối db thành công")
    } catch (error) {
        console.log("lỗi kết nôi",error)
    }
}
