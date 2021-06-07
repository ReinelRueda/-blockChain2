const { SHA256 } = require('crypto-js')
const Block = require('./Block')
const BlockChain = require('./BlockChain')
const Transaction = require('./Transactions')





let cutreCoin = new BlockChain()

/* cutreCoin.agregarBloque(new Block('15/01/2021',{cantidad:10}))
cutreCoin.agregarBloque(new Block('16/01/2021',{cantidad:20}))
cutreCoin.agregarBloque(new Block('17/01/2021',{cantidad:1})) */

//console.log(JSON.stringify(cutreCoin, null, 4))
cutreCoin.agregarTransaction( new Transaction('rey','totoro', 100))
cutreCoin.agregarTransaction( new Transaction('Pdr','Trump',50))
cutreCoin.agregarTransaction( new Transaction('Reinel','Leo',50))


console.log('comienza el minado... ')
cutreCoin.minarTransactionsPendientes('10minutos programando')

console.log("El balance nuestro es ", cutreCoin.getBalanceOfAddres('10minutosProgramando'))


console.log(cutreCoin.validarChain())
//cutreCoin.imprimir()
console.log(JSON.stringify(cutreCoin,null,4))

