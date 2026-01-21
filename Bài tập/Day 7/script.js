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