/**Ideia
 * trocar duas variáveis
 * a e b, devem inverter os valores
 */

let a = 7;
let b = 94;

console.log('a: '+ a);
console.log('b: '+ b);

let temp = a;
a = b;
b = temp;

console.log('a: '+ a);
console.log('b: '+ b);

[a, b] = [b, a]; // inversão de valores de maneira prática no JS

console.log('a: '+ a);
console.log('b: '+ b);
