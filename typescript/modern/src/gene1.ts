type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

const obj: Family<string, number> = {
    mother: 'mom',
    father: 'dad',
    child: 1
}

console.log(obj);