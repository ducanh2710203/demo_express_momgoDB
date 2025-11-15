const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://duc2710203_db_user:7tMklc5mxUGOq5D4@cluster0-ducanh.pwwwarr.mongodb.net/?appName=Cluster0-ducanh';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Kết nối MongoDB thành công'))
    .catch(err => console.error('⛔ Lỗi kết nối MongoDB:', err));

module.exports = mongoose;


//taiKhoan: duc2710203_db_user
//matkhau: 7tMklc5mxUGOq5D4
//mongodb+srv://duc2710203_db_user:7tMklc5mxUGOq5D4@cluster0-ducanh.pwwwarr.mongodb.net/?appName=Cluster0-ducanh