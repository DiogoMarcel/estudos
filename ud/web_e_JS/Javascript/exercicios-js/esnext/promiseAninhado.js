const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolver, rejeitar) => {
        http.get(url, res=> {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolver(JSON.parse(resultado))
                } catch(e) {
                    rejeitar(e)
                }
            })
        })        
    })
}

//getTurma('A').then(alunos => alunos.map(a => console.log(a, a.id, a.nome, a.imagem)))

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(a => console.log(a))
