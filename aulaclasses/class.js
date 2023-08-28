class cadastro {

    constructor(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    }

    frase(){
        console.log(`Bem vindo ${this.nome} ${this.sobrenome}`)
    }
}

p1 = new cadastro('Carlos', 'Eduardo', 20)
p1.frase()