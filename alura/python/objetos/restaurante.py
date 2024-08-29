from avaliacao import Avaliacao

class Restaurante:
    restaurantes = []
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria
        self._ativo = False
        self._avaliacoes = []
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self._nome} ➠ {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f'{'Nome do restaurante'.ljust(25)} ➠ {'Categoria'.ljust(25)} ➠ {'Ativo'.ljust(25)} ➠ {'Avaliação'.ljust(25)}')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} ➠ {restaurante._categoria.ljust(25)} ➠ {restaurante.ativo.ljust(25)} ➠ {str(restaurante.media_avaliacoes).ljust(25)}')

    @property
    def ativo(self):
        return ' ✔ ' if self._ativo else ' ✘ ' # https://coolsymbol.com/
    
    def alternar_estado(self):
        self._ativo = not self._ativo
    
    def receber_avaliacao(self, cliente, nota):
        avaliacao = Avaliacao(cliente, nota)
        self._avaliacoes.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacoes:
            return 0
        
        soma_das_notas = sum(avaliacoes._nota for avaliacoes in self._avaliacoes)
        quantidade_de_notas = len(self._avaliacoes)
        return round(soma_das_notas / quantidade_de_notas, 1)