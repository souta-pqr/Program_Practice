type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
const arr2: NumberAndStrings = [25];

type NumberStringNumber = [number, ...string[], number];

const arr3: NumberStringNumber = [25, "uhyo", "hyo", "hyo", 30];
const arr4: NumberStringNumber = [25, 24];

// type SNSNS = [string, ...NSN, string];