from restaurante import Restaurante

restaurante_01 = Restaurante('Rest 01', 'Categ 01')
restaurante_02 = Restaurante('Rest 02', 'Categ 02')
restaurante_03 = Restaurante('Rest 03', 'Categ 03')

restaurante_01.alternar_estado()
restaurante_01.receber_avaliacao('Diogo', 10)
restaurante_01.receber_avaliacao('Marcel', 6)
restaurante_01.receber_avaliacao('Santos', 3)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()