let obj: Record<string, string> = {
    a: "apple",
    b: "banana",
    c: "cherry"
  };
  
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  