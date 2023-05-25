const str = "ABC123EFG";
const searchPattern = /\d{3}/;
const searchPattern1 = /\d{2}/;
console.log(str.search(searchPattern1));
console.log(str.search(searchPattern));
