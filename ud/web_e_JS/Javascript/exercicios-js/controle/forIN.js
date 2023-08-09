const notas = [6.7, 8.1, 4.3, 5.9]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Diogo',
    sobreNome: 'Marcel',
    idade: 36,
    peso: 100
}

for (let atributo in pessoa){
    console.log(atributo, '/', pessoa[atributo])
    console.log(`${atributo} = ${pessoa[atributo]}`)
}