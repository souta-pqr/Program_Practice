let obj = {

    method(arg1, arg2) {
        return `method: ${arg1} ${arg2};`
    },

    prop: "property",

    get prop2() {
        return this.prop + '!';
    },

    set prop3(value) {
        this.prop = value;
    }
};

console.log(obj.method('引数1', '引数2'));
console.log(obj.prop);
console.log(obj.prop2);

console.log(obj.prop3 = '変更後');
console.log(obj.prop);
console.log(obj.prop2);