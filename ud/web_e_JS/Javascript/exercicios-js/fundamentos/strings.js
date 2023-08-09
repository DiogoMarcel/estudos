const escola = "Cod3r";

console.log(escola.charAt(4)); // carregar o char do index 
console.log(escola.charAt(5)); // JS não retorna erro
console.log(escola.charCodeAt(3)); // Código da tabela ASC
console.log(escola.indexOf(3)); // qual é o char do index
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log('Escola '.concat(escola).concat("!")); // concatenação
console.log('Escola ' + escola + "!"); // concatenação

console.log('3' + 2); // concatena
console.log('3' - 2); // subtrai

console.log(escola.replace(/\w/g, 'e')); // substituir tudo por e
console.log(escola.replace(/\d/, 'e')); // substituir dígitos por e
console.log('Ana,Maria,Pedro'.split(',')); // Retornar um array de strings

/**Template Strings */

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);
console.log(typeof up);