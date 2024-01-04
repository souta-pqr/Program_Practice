window.addEventListener('DOMContentLoaded', function() {
    let elCalc = document.querySelector('#calc');
    elCalc.addEventListener('click', function() {
        let prices = document.querySelectorAll('.price');
        let priceSum = 0;
        for (let i = 0; i < prices.length; i++) {
            let priceVal = prices[i].value;
            priceSum += parseInt(priceVal);
        }

        let html = '合計金額：<strong>' + priceSum + '</strong>円';

        document.querySelector('#output').innerHTML = html;
    });
});