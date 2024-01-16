const result = "Hello, abbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result !== null) {
    console.log(result.groups);
}

if (result !== null) {
    console.log("Hello abbbbbc world abc".match(/a(?<worldName>b+)c/g));
}
