// Tiêu chuẩn               | Monolithic Switch-Case                    | Modular Function Architecture     
// Độ dài khối switch       | Hàng trăm dòng, cực kỳ khó đọc            | Rất ngắn    
// Khả năng tái sử dụng     | Bằng 0                                    | Rất cao       
// Khả năng viết Unit Test  | Không thể test từng chức năng độc lập     | Rất dễ dàng kiểm thử từng hàm riêng biệt   
// Nguyên lý SRP            | Vi phạm                                   | Đảm bảo   


// cách nhét hết vào Case
switch (choice) {
  case 1:
    let total = price * quantity;
    console.log("Tổng tiền là: " + total);
    break;
  case 2:
    // Thêm món trực tiếp
    break;
}

// cách tách thành các hàm riêng
function tinhTien(price, quantity) {
  return price * quantity;
}

switch (choice) {
  case 1:
    let total = tinhTien(100, 2);
    console.log("Tổng tiền là: " + total);
    break;
    
  case 2:
    themMon();
    break;
}