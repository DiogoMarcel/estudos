/**
 * function rand(obj){
    valor = Math.random() * (obj.max - obj.min) + obj.min
}*/

function rand({min = 0, max = 1000}){   // aqui o destruturing já me retorna as 'vars' com o nome e até com valor padrão caso seja necessário
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};

console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand({}));