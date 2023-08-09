// novo Recurso do ES2015

const pessoa = {
    nome: 'Diogo',
    idade: 36,
    endereco: {
        logradouro: 'rua ABC',
        numero: 613
    }
};

const {nome, idade} = pessoa;

console.log(nome, idade);

const {nome: AVar1, idade: AVar2} = pessoa;

console.log(AVar1, AVar2);

// mesmo sem existir o atributo, e agora?

const {sobrenome, bemHumorado: bH = true} = pessoa

console.log(sobrenome, bH);

const {endereco:{logradouro, numero, cep}} = pessoa;
const {endereco} = pessoa;

console.log(endereco.logradouro, endereco.numero);
console.log(logradouro, numero, cep);