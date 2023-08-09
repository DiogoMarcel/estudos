const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 199.99;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa',
    preco: 79.09,
    obj: {
        nome: 'Dentro da camisa',
        obj: { 
            nome: 'Dentro de dentro'
        }
    }
};

console.log(prod2);

// JSON : '{ "nome": "Camisa", "preco": 79.09 }'; - é texto 