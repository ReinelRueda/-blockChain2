const Block = require('./Block')
const Transaction = require('./Transactions')

class BlockChain{
    constructor(){
        this.chain =[this.crearBloqueGenesis()]
        this.dificultad = 4
        this.pendingTransactions = []
        this.miningReward = 100 

    }
    crearBloqueGenesis(){
        return new Block('01/01/2021','Bloque Genesis','0')
    }
    getUltimoBloque(){
        return this.chain[this.chain.length - 1]
    }
     agregarBloque(nuevoBloque){
        
        nuevoBloque.hashPrevio = this.getUltimoBloque().hash
        nuevoBloque.minarBloque(this.dificultad)
        this.chain.push(nuevoBloque)
    } 

    agregarTransaction(Transaction){
        this.pendingTransactions.push(Transaction)
    }
    minarTransactionsPendientes(addresMinero){
         let block = new Block(Date.now(),this.pendingTransactions)
         block.hashPrevio = this.getUltimoBloque().hash
         block.minarBloque(this.dificultad)
         
         console.log("se minado el bloque con exito ")
         this.chain.push(block)
         this.pendingTransactions = [
             new Transaction (null,addresMinero,this.miningReward)
         ]
    }
    getBalanceOfAddres(addres){
        let balance = 0
        for(const block of this.chain){
            for (const trans of block.transactions){
                if (trans.fromAddres === addres){
                    balance -= trans.amount
                }
                if (trans.toAddres === addres){
                    balance += trans.amount
                }
            }
        }

        return balance
    }

   /*  imprimir(){
        this.chain.forEach((block)=>console.log(`${JSON.stringify(block)}\n`))
    } */
    validarChain(){
        for(let i=1;i<this.chain.length;i++){
            const bloqueActual = this.chain[i]
            const bloqueAnterior = this.chain[i-1]
            
            if (bloqueActual.hashPrevio != bloqueAnterior.calcularHash()){
                return false
            }
            if (bloqueActual.hashPrevio != bloqueAnterior.hash){
                return false
            }
        }
        return true
    }
}
module.exports = BlockChain