const funcionarios = {nome: 'Diogo', salario: 1234.56}
const clone = {sobreNome: 'Marcel', ...funcionarios}

console.log(clone);

const grupoA = ['Diogo', 'Marcel', 'Santos']
/* 
    const grupoB = ['O', grupoA, 'esta', 'estudando']

    Resultado sem o spread -> 
        [ 'O', [ 'Diogo', 'Marcel', 'Santos' ], 'esta', 'estudando' ]

    Portanto, para o operador spread é necessário adicionar os tres pontos ...
*/
const grupoB = ['O', ...grupoA, 'esta', 'estudando']

console.log(grupoB);