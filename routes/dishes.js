const express = require('express');
const router = express.Router();
const MonAn = require('../models/monAn');
const verifyToken = require('../middleware/authMiddleware');

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:
 *     MonAn:
 *       type: object
 *       required:
 *         - ten_mon
 *         - gia_ban
 *       properties:
 *         _id:
 *           type: string
 *           description: ID tự sinh của MongoDB
 *         ten_mon:
 *           type: string
 *           description: Tên món ăn
 *         mo_ta:
 *           type: string
 *           description: Mô tả chi tiết món ăn
 *         gia_ban:
 *           type: number
 *           description: Giá bán
 *         con_hang:
 *           type: boolean
 *           description: Trạng thái còn hàng
 */

/**
 * @swagger
 * tags:
 *   - name: Món Ăn
 *     description: API quản lý món ăn
 */

/**
 * @swagger
 * /api/dishes:
 *   get:
 *     summary: Lấy danh sách tất cả món ăn (Công khai)
 *     tags: [Món Ăn]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MonAn'
 */
router.get('/', verifyToken, async (req, res, next) => {
    try {
        const tatCaMonAn = await MonAn.find();
        res.json(tatCaMonAn);
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /api/dishes:
 *   post:
 *     summary: Tạo món ăn mới (Cần đăng nhập)
 *     tags: [Món Ăn]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MonAn'
 *     responses:
 *       201:
 *         description: Tạo thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post('/', verifyToken, async (req, res, next) => {
    try {
        const monAnMoi = await MonAn.create(req.body);
        res.status(201).json(monAnMoi);
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /api/dishes/{id}:
 *   put:
 *     summary: Cập nhật món ăn (Cần đăng nhập)
 *     tags: [Món Ăn]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID món ăn
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MonAn'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.put('/:id', verifyToken, async (req, res, next) => {
    try {
        const idMonAn = req.params.id;
        const monAn = await MonAn.findByIdAndUpdate(idMonAn, req.body, { new: true });
        if (!monAn) {
            return res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
        res.json(monAn);
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /api/dishes/{id}:
 *   delete:
 *     summary: Xóa món ăn (Cần đăng nhập)
 *     tags: [Món Ăn]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID món ăn
 *     responses:
 *       204:
 *         description: Xóa thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.delete('/:id', verifyToken, async (req, res, next) => {
    try {
        const idMonAn = req.params.id;
        const monAn = await MonAn.findByIdAndDelete(idMonAn);
        if (!monAn) {
            return res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
