const imprimirResult = function(nota) {
    switch (Math.floor(nota)){
        case 10:
            case 9:
                console.log('entre 9 e 10: '+ nota)
                break
        case 8: case 7:
            console.log('entre 7 e 8: '+ nota)
            break
        case 6: case 5: case 4:
            console.log('entre 4 e 6: '+ nota)
            break
        case 3: case 2: case 1: case 0:
            console.log('entre 0 e 3: '+ nota)
            break
        default:
            console.log('número inválido')
    }
}

imprimirResult(11)
imprimirResult(9)
imprimirResult(6)
imprimirResult(4)
imprimirResult(2)
imprimirResult(-1)