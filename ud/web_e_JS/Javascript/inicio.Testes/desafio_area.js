// PI * raio * raio

const PI = 3.14159265359;
const PI_JS = Math.PI;
let raio = 10;
const areaCirculo = PI * (raio * raio);
const areaCirculo_JS = PI_JS * (Math.pow(raio, 2));

console.log("O valor da área é: " + areaCirculo + "m²");
console.log("O valor da área é: " + areaCirculo_JS + "m²");