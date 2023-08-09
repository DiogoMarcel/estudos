// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 33, 43, 3, 1, 9); // aceita - a linguagem é flexível
imprimirSoma();

// função com retorno
function soma(a, b = 0){
    return a + b;
}

console.log(soma(23, 22));
console.log(soma(23));