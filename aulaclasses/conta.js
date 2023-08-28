class conta{
    constructor(numero, saldo, debito, credito){
        this.numero = numero
        this.saldo = saldo
        this.debito = debito
        this.credito = credito
    }
    calcsaldo(){
        return this.saldo - (this.debito + this.credito)
    }
    verificsaldo(){
        let saldoat = this.calcsaldo()
        if(saldoat >= 0){
            alert(`saldo positivo, ${saldoat}`)
        } else {
            alert(`saldo negativo, ${saldoat}`)
        }
    }
}

let numero = prompt('Digite o número da conta')
let saldo = parseFloat(prompt('Digite o saldo atual'))
let debito = parseFloat(prompt('Digite o debito atual'))
let credito = parseFloat(prompt('Digite o credito atual'))

let contafin = new conta(numero,saldo,debito,credito)
contafin.verificsaldo()