/*
 ** Đầu vào: Số ngày làm
 ** Các bước xử lí:
 ** B1: Tạo 1 biến có giá trị không đổi là lương một ngày = 100.000
 ** B2: Nhận dữ liệu về số ngày làm từ người dùng
 ** B3: In ra kết quả lương = lương một ngày * số ngày làm
 ** Đầu ra: Lương tổng cộng
 */

const luong1Ngay = 100000;
let soNgayLam = prompt("Nhập số ngày làm: ");
console.log("Lương: ", luong1Ngay * soNgayLam);
