function tratarErroeLancar(erro){
    //throw new Error('...')
    throw 'Mensagem de erros'
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroeLancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Diogo'}
imprimirNome(obj)