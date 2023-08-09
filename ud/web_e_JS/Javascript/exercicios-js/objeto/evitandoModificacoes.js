const produto = Object.preventExtensions(
    {
        nome: 'diogo',
        preco: 1.99,
        tag: 'myName'
    }
)

console.log('Extensível:', Object.isExtensible(produto));

produto.descricao = 'Marcel'
delete produto.tag
console.log(produto);

const pessoa = {nome: 'Valéria', idade: 36}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Korb'
delete pessoa.nome
pessoa.idade = 26
console.log(pessoa);

// Object.Freeze = Selado + Constantes