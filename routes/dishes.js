const express = require('express');
const router = express.Router();
const MonAn = require('../models/monAn');

/**
 * @swagger
 * components:
 *   schemas:
 *     MonAn:
 *       type: object
 *       required:
 *         - ten_mon
 *         - gia_ban
 *       properties:
 *         id:
 *           type: integer
 *           description: ID tự tăng của món ăn
 *         ten_mon:
 *           type: string
 *           description: Tên món ăn
 *         mo_ta:
 *           type: string
 *           description: Mô tả chi tiết món ăn
 *         gia_ban:
 *           type: number
 *           format: decimal
 *           description: Giá bán (ví dụ 50000.00)
 *         con_hang:
 *           type: boolean
 *           description: Trạng thái còn hàng (mặc định true)
 */

/**
 * @swagger
 * tags:
 *   name: Món Ăn
 *   description: API quản lý món ăn
 */

/**
 * @swagger
 * /api/dishes:
 *   get:
 *     summary: Lấy danh sách tất cả món ăn
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
router.get('/', async (req, res, next) => {
    try {
        const tatCaMonAn = await MonAn.findAll();
        res.json(tatCaMonAn);
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /api/dishes:
 *   post:
 *     summary: Tạo món ăn mới
 *     tags: [Món Ăn]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MonAn'
 *     responses:
 *       201:
 *         description: Tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MonAn'
 */
router.post('/', async (req, res, next) => {
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
 *     summary: Cập nhật món ăn
 *     tags: [Món Ăn]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MonAn'
 */
router.put('/:id', async (req, res, next) => {
    try {
        const idMonAn = req.params.id;
        const monAn = await MonAn.findByPk(idMonAn);
        if (!monAn) {
            return res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
        await monAn.update(req.body);
        res.json(monAn);
    } catch (err) {
        next(err);
    }
});

/**
 * @swagger
 * /api/dishes/{id}:
 *   delete:
 *     summary: Xóa món ăn
 *     tags: [Món Ăn]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID món ăn
 *     responses:
 *       204:
 *         description: Xóa thành công
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const idMonAn = req.params.id;
        const monAn = await MonAn.findByPk(idMonAn);
        if (!monAn) {
            return res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
        await monAn.destroy();
        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

module.exports = router;