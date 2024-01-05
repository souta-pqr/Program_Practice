function setOrder(order1, order2, order3, order4) {
    console.log(order1, order2, order3, order4);   
}

const orders = ["カレー", "ラーメン", "うどん", "そば"];

setOrder(...orders); // カレー ラーメン うどん そば