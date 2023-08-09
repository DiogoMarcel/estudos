var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero)
}

console.log('fora = ', numero) // JS ignora o escopo - não há bloco que retire o acesso, a não ser uma função