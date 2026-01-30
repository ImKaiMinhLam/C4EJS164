console.log("Cau 1:")
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log("Tổng từ 1 đến 100 là: " + sum)

console.log("Cau 2:")
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

function giaiCau6(n) {
let S = 0; // Khởi tạo S = 0
// Vòng lặp duyệt từ 1 đến n
// Logic: Tính từ trong ra ngoài (bắt đầu từ căn 1)
for (let i•= 1; i <= n; i++) {
S•= Math.sqrt(i + S);
return S;
}
// --- CÂU 7 ---
function giaiCau7(n) {
let S = 0; // Khởi tạo S = 0
// Vòng lặp duyệt từ 1 đến n (theo gợi ý đề bài)
// Logic: Tính từ trong ra ngoài (bắt đầu từ căn n)
for (let i = 1; i <= n; i++) {
// Vì tính từ trong ra ngoài nên ta cần lấy giá trị n trước, sau đó giảm dần
let giaTriHienTai = n - i + 1;
S = Math.sqrt(giaTriHienTai + S);
}
return S;