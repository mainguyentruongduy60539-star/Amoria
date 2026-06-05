# MareVibe — Landing Page Vòng Tay Đi Biển

Một landing page sang trọng, tông trắng-đen cho thương hiệu vòng tay đi biển mùa hè.

---

## 📁 Cấu trúc dự án

```
marevibe/
├── index.html          ← File HTML chính (toàn bộ trang)
├── css/
│   └── style.css       ← Toàn bộ CSS (typography, layout, animation)
├── js/
│   ├── app.js          ← Navigation, giỏ hàng, form xử lý
│   └── products.js     ← Dữ liệu & render 5 sản phẩm
└── README.md
```

---

## 🚀 Cách chạy

### Cách 1 — VS Code + Live Server (khuyến nghị)
1. Mở thư mục `marevibe/` trong VS Code
2. Cài extension **Live Server** (Ritwick Dey)
3. Click chuột phải vào `index.html` → **"Open with Live Server"**
4. Trình duyệt tự mở tại `http://127.0.0.1:5500`

### Cách 2 — Mở thẳng file
Double-click `index.html` để mở trong trình duyệt (không cần server)

---

## 📄 Các trang có trong dự án

| Trang | Mô tả |
|-------|-------|
| **Trang chủ** | Hero section, feature strip, preview bộ sưu tập |
| **Sản Phẩm** | Grid 5 sản phẩm với giá & nút "Thêm vào giỏ hàng" |
| **Chính Sách** | Vận chuyển, đổi trả, bảo mật |
| **Liên Hệ** | 3 khung: địa chỉ, giờ hoạt động, SĐT & email |
| **Thanh toán** | Form nhập thông tin giao hàng |
| **Cảm ơn** | Trang xác nhận đặt hàng thành công |

---

## ✏️ Tùy chỉnh

### Thay đổi thông tin liên hệ
Mở `index.html`, tìm phần `id="contact"` và `id="site-footer"`, sửa địa chỉ / SĐT / email.

### Thay đổi sản phẩm
Mở `js/products.js`, chỉnh mảng `PRODUCTS` — tên, giá, hình ảnh, v.v.

### Thay đổi màu sắc
Mở `css/style.css`, chỉnh các biến trong `:root`:
```css
--black: #0a0a0a;
--white: #fafafa;
--accent: #c8a96e;  /* màu vàng đồng nhấn */
```

---

## 🎨 Font chữ được sử dụng
- **Cormorant Garamond** — Display font sang trọng (tiêu đề)
- **Montserrat** — Body font hiện đại (nội dung)

Cả hai được tải từ Google Fonts, cần có kết nối internet.

---

*© 2025 MareVibe*
