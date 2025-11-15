
const swaggerJsdoc = require('swagger-jsdoc');

const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Quản lý Nhà hàng (Express)',
            version: '1.0.0',
            description: 'Tài liệu API cho dự án Express, Sequelize và MySQL.',
        },
        servers: [
            {
                description: 'Development server',
            },
        ],
    },

    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;