let obj = {
    name: "John",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  obj.greet(); // 出力: Hello, John  