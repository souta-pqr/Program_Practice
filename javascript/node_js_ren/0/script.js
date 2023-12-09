document.write('<p>This is "script.js".</p>');
var price = 12300;
document.write('<p>価格:' + price + '円</p>');
const tax = 0.10;
price = Math.floor(price * (1.0 + tax));
document.write('<p>税込価格:' + price + '円</p>');

function calc(max) {
    var total = 0;
    for (var i = 0; i < max; i++) {
        total += i;
    }
    document.write('<p>' + max + 'までの合計は，' + total + '</p>');
}

calc(100)

var arr = [100, 94, 202, 29];
var total = 0
for (var n in arr){
    total += arr[n]
}
var average = total / arr.length
document.write('<p>配列の合計値は' + total + '、平均値は' + average + '</p>')