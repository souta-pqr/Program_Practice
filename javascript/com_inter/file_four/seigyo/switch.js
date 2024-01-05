function getPrice(menu) {
    let res;

    switch (menu) {
        case 'ホットコーヒー':
        case 'アイスコーヒー':
        case 'カフェオレ':
            res = 450;
            break;

        case 'チーズケーキ':
        case 'チョコレートケーキ':
            res = 550;
            break;
        
        default:
            res = '取り扱っていません';
            break;
    }

    return res;
}

console.log('ホットコーヒー', getPrice('ホットコーヒー'));
console.log('アイスコーヒー', getPrice('アイスコーヒー'));
console.log('チーズケーキ', getPrice('チーズケーキ'));