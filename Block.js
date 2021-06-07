const SHA256 = require('crypto-js/sha256') 
class Block{

    constructor(timestamp,transactions,hashPrevio=""){
        this.timestamp = timestamp
        this.transactions = transactions
        this.hashPrevio = hashPrevio
        this.nonce=0
        this.hash = this.calcularHash()
    }
    calcularHash(){
        return SHA256(this.timestamp + 
            this.hashPrevio + 
            JSON.stringify(this.transactions)+
            this.nonce).toString()
    }
    minarBloque(dificultad){

        while(this.hash.substring(0,dificultad) !== Array(dificultad+1).join('0')){
            this.nonce++
            this.hash = this.calcularHash()


        }
    }
}

module.exports = Block