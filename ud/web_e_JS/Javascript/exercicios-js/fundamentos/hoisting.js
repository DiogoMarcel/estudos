/**
 * Hoisting eleva a variável para cima do seu uso
 */

console.log('a =', a);
var a = 2;
console.log('a =', a);

console.log('b =', b);
let b = 5;
console.log('b =', b)