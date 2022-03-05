/*
 ** Đầu vào: Chiều dài (chieuDai), chiều rộng (chieuRong) hình chữ nhật
 ** Các bước xử lí:
 ** B1: Khởi tạo và nhận dữ liệu chieuDai, chieuRong là các số thực từ người dùng
 ** B2: Chuyển dữ liệu người dùng nhập (string) thành số (integer)
 ** B3: Tính diện tích hình chữ nhật = chiều dài * chiều rộng
 ** B4: Tính chu vi hình chữ nhật = (chiều dài + chiều rộng) * 2
 ** B5: In kết quả ra màn hình bằng console.log()
 ** Đầu ra: In ra diện tích, chu vi hình chữ nhật
 */

const chieuDai = prompt("Nhập chiều dài hình chữ nhật: ");
const chieuRong = prompt("Nhập chiều rộng hình chữ nhật: ");
const dienTich = chieuDai * chieuRong;
const chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật: ", dienTich);
console.log("Chu vi hình chữ nhật: ", chuVi);
