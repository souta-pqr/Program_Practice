console.log('Hello, foobar world! abbc'.replace(/ab+c/, "foober"));

console.log('Hello, abbbbbbbc world! abbc'.replace(/ab+c/g, 'foobar'));

const result = "Hello, abbbbbbc world! abbc".match(/a(b+)c/);
if (result !== null) {
    console.log(result[0]);
    console.log(result[1]);
}