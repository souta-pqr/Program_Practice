class ConflictClass {
    // インスタンスオブジェクトに`method`を定義
    method = () => {
        console.log("インスタンスオブジェクトのメソッド");
    };

    // クラスのプロトタイプメソッドとして`method`を定義
    method() {
        console.log("プロトタイプのメソッド");
    }
}

const conflict = new ConflictClass();
conflict.method(); // どちらの`method`が呼び出される？

