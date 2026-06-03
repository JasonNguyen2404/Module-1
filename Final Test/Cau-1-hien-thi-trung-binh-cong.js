let arr = [];
let sum = 0;
let count = 0;
let n = parseInt(prompt("Nhập số lượng phần tử: "));
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}: `));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        sum += arr[i];
        count++;
    }
}
if (count > 0) {
    let average = sum / count;
    document.write(`Trung bình cộng của các phần tử chia hết cho 3 là: '' + average);
} else {
    document.write("Không có phần tử nào chia hết cho 3."); 
}