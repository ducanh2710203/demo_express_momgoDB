
require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);


(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ KẾT NỐI SEQUELIZE THÀNH CÔNG!');
    } catch (error) {
        console.error('⛔ LỖI KẾT NỐI SEQUELIZE:', error);
    }
})();

module.exports = sequelize;