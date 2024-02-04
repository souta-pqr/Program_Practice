const result1 = "Hello, abbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result1 !== null) {
    console.log(result1.groups)
    console.log(result1)
}
