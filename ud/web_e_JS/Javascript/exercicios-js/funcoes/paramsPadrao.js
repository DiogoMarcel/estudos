// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 2;
    c = c || 3;

    return a + b + c;
}

console.log(soma1(), '-', soma1(4), soma1(0, 0, 0)) // zero assume o valor 1 por retornar falso

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(soma2(), '-', soma2(4), soma2(0, 0, 0))

// estratégia 5 para gerar valor padrão
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3(), '-', soma3(4), soma3(0, 0, 0))