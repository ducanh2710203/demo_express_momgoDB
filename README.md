# 🍽️ API Quản Lý Món Ăn (Express + MongoDB + JWT)

Dự án REST API dùng để quản lý món ăn, xây dựng bằng **Node.js**,
**Express**, **MongoDB (Mongoose)**, có tích hợp **JWT Authentication**
và **Swagger UI** để mô tả API.

## 🚀 Công nghệ sử dụng

- Node.js + Express
- MongoDB + Mongoose
- JWT
- Swagger UI
- CORS
- dotenv

## 📁 Cấu trúc thư mục

    project/
    │── models/
    │   └── monAn.js
    │── routes/
    │   └── dishes.js
    │── middleware/
    │   └── authMiddleware.js
    │── app.js
    │── server.js
    │── package.json
    │── .env
    │── README.md

## ⚙️ Cài đặt

### 1. Clone dự án

git clone `<repository-url>`{=html} cd project

### 2. Cài đặt thư viện

npm install

### 3. Tạo file .env

PORT=3000 MONGO_URI=mongodb://localhost:27017/quanlymonan
JWT_SECRET=your_secret_key

### 4. Chạy dự án

npm start

Server mặc định chạy tại: http://localhost:3000

## 📘 API Document (Swagger)

http://localhost:3000/api-docs

## 🔐 Xác thực JWT

Authorization: Bearer `<token>`{=html}

## 🍜 Danh sách API

GET /api/dishes
POST /api/dishes
PUT /api/dishes/:id
DELETE /api/dishes/:id

## 🧱 Model Món ăn (Mongoose)

{ ten_mon: String, mo_ta: String, gia_ban: Number, con_hang: Boolean }

## 📄 License

MIT License.
