const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    // Lấy token từ header (thường là: Authorization: Bearer <token>)
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // Lấy phần token sau chữ Bearer

    if (!token) {
        return res.status(401).json({ message: 'Truy cập bị từ chối. Không tìm thấy Token.' });
    }

    try {
        // Kiểm tra token có hợp lệ không
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Lưu thông tin user vào request để dùng sau này nếu cần
        next(); // Cho phép đi tiếp
    } catch (err) {
        res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn.' });
    }
};

module.exports = verifyToken;