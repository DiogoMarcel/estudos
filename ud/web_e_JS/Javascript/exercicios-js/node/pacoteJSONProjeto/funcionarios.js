const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = f => f.pais === 'China'
const soMulher = m => m.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chinesas)
        .filter(soMulher)
        .reduce(menorSalario)

    console.log(func);
})