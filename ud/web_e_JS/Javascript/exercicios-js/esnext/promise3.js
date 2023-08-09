function gerarNumeroAleatorio(min, max) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        return resolve(aleatorio)
    })
}

gerarNumeroAleatorio(1, 60)
    .then(retAleatorio => retAleatorio * 10)
    .then(numX10 => `O número gerado * 10 é ${numX10}`)
    .then(console.log)