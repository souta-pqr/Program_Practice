const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
console.log(indexOfQuery);
const queryString = url.slice(indexOfQuery);
console.log(queryString);
