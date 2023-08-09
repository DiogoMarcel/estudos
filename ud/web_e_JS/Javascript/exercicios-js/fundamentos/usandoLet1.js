var numero = 1;
var numero2 = 3;
{
    let numero2 = 2;

    console.log('dentro var = ', numero); // O LET tem visão apenas dentro do bloco/escopo 
    console.log('dentro let = ', numero2);
}

console.log('fora = ', numero);
console.log('fora = ', numero2);