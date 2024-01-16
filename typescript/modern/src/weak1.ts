// WeakMapの使用例
class MyClass {
    constructor(public id: number) {}
}

let weakMap = new WeakMap<MyClass, string>();

let instance: MyClass | null = new MyClass(1);
weakMap.set(instance, 'Hello, World!');

console.log(weakMap.get(instance));  // 'Hello, World!'

instance = null;  // インスタンスへの参照を削除

// ガベージコレクションが実行されると、WeakMapからも自動的に削除されます。

// WeakSetの使用例
let weakSet = new WeakSet<MyClass>();

let instance1: MyClass | null = new MyClass(1);
let instance2 = new MyClass(2);

weakSet.add(instance1);
weakSet.add(instance2);

console.log(weakSet.has(instance1));  // true
console.log(weakSet.has(instance2));  // true

instance1 = null;  // インスタンスへの参照を削除