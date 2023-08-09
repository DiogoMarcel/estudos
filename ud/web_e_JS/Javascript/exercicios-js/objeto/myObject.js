const objDiogo = {}
const objDiogo2 = new Object;

console.log(objDiogo);
console.log(objDiogo2);

// Novo objeto a partic
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc  = desc
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const myProduct = new Produto('É meu', 12.43, 0.10)
console.log(myProduct.getPrecoComDesconto(), myProduct);

const myProduct2 = new Produto('É meu 2', 100, 0.25)
console.log(myProduct2.getPrecoComDesconto(), myProduct2);
