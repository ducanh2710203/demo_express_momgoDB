const mongoose = require('mongoose');
require('dotenv').config();


const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://duc2710203_db_user:7tMklc5mxUGOq5D4@cluster0-ducanh.pwwwarr.mongodb.net/?appName=Cluster0-ducanh';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);

        console.log('✅ Kết nối MongoDB thành công');
    } catch (err) {
        console.error('⛔ Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;