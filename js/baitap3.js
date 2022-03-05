/*
 ** Đầu vào: Số ngày làm
 ** Các bước xử lí:
 ** B1: Tạo 1 biến có giá trị không đổi là tỉ giá = 23.500
 ** B2: Nhận dữ liệu về số tiền từ người dùng
 ** B3: In ra kết quả lương = tỉ giá * số tiền
 ** Đầu ra: Lương tổng cộng
 */

const tiGia = 23500;
let soTien = prompt("Nhập số tiền: ");
console.log("Số tiền: ", tiGia * soTien);
