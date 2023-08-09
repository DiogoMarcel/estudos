const obj1 = {a: 1, b: 2, c: 3, soma() {return a + b + c}}

console.log(JSON.stringify(obj1));

//console.log(JSON.parse("{a: 10, b: 20, c: 30}"));
//console.log(JSON.parse("{'a': 10, 'b': 20, 'c': 30}"));
console.log(JSON.parse("{\"a\": 10, \"b\": 20, \"c\": 30}"));
console.log(JSON.parse('{"a": 10, "b": 20, "c": 30}'));
console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": {}, "e": []}'));
