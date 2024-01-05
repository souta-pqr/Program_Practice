const arr = [
    {name: 'Suzuki', age: 22},
    {name: 'Tanaka', age: 12},
    {name: 'Yamada', age: 34},
]

console.log(arr.find(x => x.age < 20))
console.log(arr.findIndex(x => x.age < 20))
console.log(arr.filter(x => x.age < 20))
console.log(arr.every(x => x.age < 20))
console.log(arr.some(x => x.age < 20))
console.log(arr.map(x => x.age * 2))
console.log(arr.reduce((acc, x) => acc + x.age, 0))
console.log(arr.reduce((acc, x) => acc + x.age, 0) / arr.length)
console.log(arr.sort((a, b) => a.age - b.age))
console.log(arr.sort((a, b) => b.age - a.age))
console.log(arr.sort((a, b) => a.name.localeCompare(b.name)))
console.log(arr.reverse())

console.log(arr)