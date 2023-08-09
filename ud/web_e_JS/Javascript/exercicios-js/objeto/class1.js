class Lancamento {
    constructor(nome = 'Genérico', valor = 0, debitoCredito = 'C'){
        this.nome = nome;
        this.valor = valor;
        this.debitoCredito = debitoCredito;
    };
};

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    };

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            if (l.debitoCredito == 'D') valorConsolidado -= l.valor
            else valorConsolidado += l.valor
        });
        return valorConsolidado;
    };
};

const salario = new Lancamento('Salário', 4500);
const contaDeLuz = new Lancamento('Luz', 500, 'D');

const contas = new CicloFinanceiro(6, 2022);

contas.addLancamentos(salario, contaDeLuz);

console.log(contas);

console.log(contas.sumario());