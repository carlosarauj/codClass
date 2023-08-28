class dispositivo{
    constructor(preço){
    this.preço = preço
    this.power = false
    }

 on(){
    if(this.power){
        console.log('Está ligado')
        return
    } 
    this.power = true
 }

}

class celular extends dispositivo{
    constructor(preço, marca, cor){
    super(preço)
    this.cor = cor
    this.marca = marca
    }
}

let c1 = new celular (1000, 'Xiaomi', 'preto')

c1.on()
console.log(c1)

