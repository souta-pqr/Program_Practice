const url = 'https://www.google.com/search?q=javascript';

console.log(encodeURI(url));
console.log(encodeURIComponent(url));

console.log('-------------------');

console.log(decodeURI(url));
console.log(decodeURIComponent(url));