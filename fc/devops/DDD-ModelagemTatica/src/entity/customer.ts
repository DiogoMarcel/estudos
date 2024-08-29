class Customer {
    
    _id: string;
    _name: string;
    _address: string;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    // Isso é apenas uma função sem expressividade
    // Não me fala por qual razão isso é utilizado
    // set name(name: string){
    //     this._name = name;
    // }

    // Aqui eu tenho uma expressividade,  
    // o nome diz que estou mudando uma regra
    changeName(name: string) {
        this._name = name;
    }
    // assim é uma modelagem rica
    // expressando as regras do negócio

}