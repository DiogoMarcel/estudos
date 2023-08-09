function Pessoa() {
    this.idade = 0;

    /*setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000);*/

    const self = this // um drible no this para que o acesso seja direto ao self sem alterações    
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000);

    /** 
     * Assim funcionou...
    // setInterval(() => { 
        
    // }, interval);
     */
}

new Pessoa