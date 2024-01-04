console.log('アンパン', 'ジャムパン', 'クリームパン');

let itemName;

itemName = 'ミカンジュース';

let itemName2 = "ぶどうジュース";

console.log(itemName + "を飲んだ後に，" + itemName2 + "も飲んだ");

function getDescription(name, price) {
    let res = ' 『' + name + '』は' + price + '円です';
    return res;
}

console.log(getDescription('パフェ', 150));