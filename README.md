# 🍽️ API Quản Lý Nhà Hàng (Express + MongoDB + JWT)

Dự án Backend RESTful API phục vụ việc quản lý thực đơn nhà hàng. Hệ thống được xây dựng trên nền tảng **Node.js** & **Express**, sử dụng cơ sở dữ liệu **MongoDB**, bảo mật bằng **JWT** và tích hợp tài liệu API tự động qua **Swagger**.

![NodeJS](https://img.shields.io/badge/Node.js-Run_Time-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Security-000000?logo=json-web-tokens)
![Swagger](https://img.shields.io/badge/Swagger-Documentation-85EA2D?logo=swagger)

---

## 🚀 Tính năng chính

- **Xác thực (Auth):** Đăng ký, Đăng nhập, cấp phát Access Token (JWT).
- **Phân quyền (Middleware):** Bảo vệ các API thêm/sửa/xóa, chỉ cho phép người dùng đã đăng nhập (có Token) thực hiện.
- **Quản lý Món ăn (CRUD):**
  - Xem danh sách món (Công khai).
  - Thêm, Sửa, Xóa món ăn (Yêu cầu Token).
- **Tài liệu hóa:** Giao diện Swagger UI trực quan để test API.

---

## 📁 Cấu trúc thư mục dự án

EXPRESS/
│── bin/
│ └── www # Script khởi động server (entry point)
│── config/
│ │── database.js # Cấu hình kết nối MongoDB
│ └── swaggerConfig.js # Cấu hình Swagger Options
│── middleware/
│ └── authMiddleware.js # Middleware kiểm tra JWT Token
│── models/
│ │── monAn.js # Schema Mongoose cho Món ăn
│ └── user.js # Schema Mongoose cho User
│── routes/
│ │── auth.js # API Đăng ký / Đăng nhập
│ │── dishes.js # API CRUD Món ăn
│ │── index.js # Route trang chủ
│ └── users.js # Route user mẫu
│── views/ # Giao diện server (Jade/Pug)
│── public/ # File tĩnh (CSS, JS, Images)
│── app.js # File cấu hình chính của Express
│── .env # Biến môi trường (Cần tự tạo)
└── README.md # Hướng dẫn sử dụng

---

## ⚙️ Cài đặt và Chạy dự án

### 1. Yêu cầu tiên quyết

- Node.js (v14 trở lên)
- Yarn hoặc NPM
- MongoDB (Atlas hoặc cài local)

### 2. Cài đặt thư viện

Tại thư mục gốc dự án, chạy lệnh:

yarn install

# Hoặc nếu dùng npm: npm install

### 3. Cấu hình môi trường (.env)

Tạo một file tên là .env ngang hàng với file app.js.
Copy nội dung sau vào và điền thông tin của bạn:

PORT=3000

# Chuỗi kết nối MongoDB (Thay <password> bằng mật khẩu của bạn)

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster...

# Khóa bí mật dùng để mã hóa Token (Điền chuỗi bất kỳ)

JWT_SECRET=bi_mat_khong_duoc_bat_mi

### 4. Khởi chạy Server

Chạy chế độ phát triển (tự động restart khi sửa code):

yarn dev

Hoặc chạy thông thường:

npm start

Server sẽ hoạt động tại: http://localhost:3000

---

## 📘 Tài liệu API (Swagger)

Dự án tích hợp sẵn Swagger UI. Truy cập đường dẫn sau để xem và test API:

👉 URL: http://localhost:3000/api-docs

### 🔐 Hướng dẫn Authorize (Nhập Token) trên Swagger

Vì các API POST, PUT, DELETE yêu cầu đăng nhập, bạn cần làm như sau trên giao diện Swagger:

1.  Gọi API /api/auth/login để đăng nhập -> Copy chuỗi token trả về.
2.  Bấm nút Authorize (hình ổ khóa 🔓) ở góc trên bên phải trang.
3.  Nhập vào ô value: Bearer <dán*token_của_bạn_vào*đây>
    (Lưu ý: Có khoảng trắng giữa chữ Bearer và token).
4.  Bấm Authorize -> Close.
5.  Bây giờ ổ khóa đã đóng (🔒), bạn có thể gọi API thoải mái.

---

## 📝 Danh sách API Endpoint

### 👤 Authentication

| Method | Endpoint           | Mô tả                 | Yêu cầu Token |
| :----- | :----------------- | :-------------------- | :-----------: |
| POST   | /api/auth/register | Đăng ký tài khoản mới |      ❌       |
| POST   | /api/auth/login    | Đăng nhập lấy Token   |      ❌       |

### 🍲 Dishes (Món ăn)

| Method | Endpoint        | Mô tả                    | Yêu cầu Token |
| :----- | :-------------- | :----------------------- | :-----------: |
| GET    | /api/dishes     | Lấy danh sách tất cả món |      ❌       |
| POST   | /api/dishes     | Thêm món ăn mới          |      ✅       |
| PUT    | /api/dishes/:id | Cập nhật thông tin món   |      ✅       |
| DELETE | /api/dishes/:id | Xóa món ăn               |      ✅       |

---

## 🧱 Data Models (Schema)

**MonAn (Dishes)**

{
"ten_mon": "String (Bắt buộc)",
"mo_ta": "String",
"gia_ban": "Number (Bắt buộc)",
"con_hang": "Boolean (Mặc định: true)"
}

**User**

{
"username": "String (Duy nhất)",
"password": "String (Đã mã hóa)"
}

---

© 2025 Project Express API.
