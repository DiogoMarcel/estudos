function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)            
        }, segundos *1000)
    })
}

falarDepoisDe(3, 'Diogo Marcel')
    .then(frase => frase.concat('! dos Santos'))
    .then(outra => console.log(outra))
    .catch(e => console.log(e))