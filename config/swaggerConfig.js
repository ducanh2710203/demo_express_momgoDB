const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        // DÒNG QUAN TRỌNG NHẤT: Khai báo phiên bản OpenAPI để sửa lỗi "Unable to render..."
        openapi: '3.0.0',
        info: {
            title: 'API Quản lý Nhà hàng (Express + MongoDB)',
            version: '1.0.0',
            description: 'Tài liệu API hỗ trợ xác thực JWT',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        // Cấu hình bảo mật (nút Authorize)
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    // Đường dẫn tới các file chứa comment @swagger
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;