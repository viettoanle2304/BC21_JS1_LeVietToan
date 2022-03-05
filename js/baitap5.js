/*
 ** Đầu vào: 1 số thực có 2 chữ số (num)
 ** Các bước xử lí:
 ** B1: Khởi tạo và nhận dữ liệu num là 1 số thực có 2 chữ số từ người dùng
 ** B2: Chuyển dữ liệu người dùng nhập (string) thành số (integer)
 ** B3: Tách lấy số hàng đơn vị (donVi) = num % 10
 ** B4: Tách lấy số hàng chục (chuc) = Math.floor(num / 10)
 ** B5: Tính tổng hai ký số (ketQua) = donVi + chuc
 ** B6: In kết quả ra màn hình console
 ** Đầu ra: In ra giá trị tổng hai ký số
 */

const num = prompt("Nhập số thực có 2 chữ số: ");
const donVi = parseInt(num) % 10;
const chuc = Math.floor(parseInt(num) / 10);

const ketQua = donVi + chuc;

console.log(ketQua);
