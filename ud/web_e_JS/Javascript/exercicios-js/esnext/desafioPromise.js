const fs = require('fs')
const path = require('path')

function lerArquivoPromise(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudoArquivo) => {
            if (err) {
                reject(`Caminho do arquivo inexistente. Confira o diretório e arquivo. ${caminho}`)
            } else {
                resolve(conteudoArquivo.toString())
            }
            console.log('Já esta lendo o arquivo, aguarde...');
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

/*
lerArquivoPromise(caminho)
    .then(console.log)
    .catch(console.log)*/

// Novas implementações
lerArquivoPromise(caminho)
    .then(conteudoArquivo => conteudoArquivo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(textoFinal => `O texto final ficou: ${textoFinal}`)
    .then(console.log)
    .catch(console.log)