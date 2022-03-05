/*
 ** Đầu vào: 5 số thực a, b, c, d, e
 ** Các bước xử lí:
 ** B1: Khởi tạo và nhận dữ liệu a, b, c, d, e là các số thực từ người dùng
 ** B2: Chuyển dữ liệu người dùng nhập (string) thành số (integer)
 ** B3: Viết hàm sum tính tổng các số
 ** B4: Tính giá trị trung bình = sum / 5
 ** B5: In kết quả ra màn hình bằng console.log()
 ** Đầu ra: In ra giá trị trung bình của 5 số
 */

let a = prompt("Nhập số thực 1: ");
let b = prompt("Nhập số thực 2: ");
let c = prompt("Nhập số thực 3: ");
let d = prompt("Nhập số thực 4: ");
let e = prompt("Nhập số thực 5: ");

const sum = () =>
  parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);

let average = sum() / 5;

console.log("Số trung bình: ", average);
