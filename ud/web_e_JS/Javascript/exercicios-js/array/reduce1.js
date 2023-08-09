const alunos = [
    { nome: 'João', nota: 1, bolsista: true },
    { nome: 'Maria', nota: 2, bolsista: true },
    { nome: 'Pedro', nota: 3, bolsista: false },
    { nome: 'Ana', nota: 4, bolsista: true }
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}, 10)

console.log(resultado);

console.log(alunos.map(a => a.bolsista));

// Todos são bolsistas? 

const todosBolsistas = (resultadoAcumulador, bolsista) => resultadoAcumulador && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// Tem algum bolsista?

const algunsBolsistas = (resultadoAcumulador, bolsista) => resultadoAcumulador || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsistas));
