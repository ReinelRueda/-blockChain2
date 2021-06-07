const express = require('express')
const bodyParser = require("body-parser");
const router = express.Router();
const BlockChain = require('./BlockChain')
const Transaction = require('./Transactions')


 
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//blockchain
let cutreCoin = new BlockChain() 


app.get('/', function (req, res) {
  res.send('Hello World')
})

/**inicio de endopint */
app.post('/transacion/crear', function (req, res) 
{
  
    cutreCoin.agregarTransaction( new Transaction(req.body.envia,req.body.recibe,req.body.cantidad))
    //responde
    console.log(JSON.stringify(cutreCoin))
    res.send('transaccion creada')
    
})
/**fin de endopint */
 

  app.post('/transacion/nueva', function (req, res) {

  res.send(JSON.stringify(cutreCoin))

})
app.post('/transacion/minar', function (req, res) {

  res.send(cutreCoin.minarTransactionsPendientes())
 
})

app.listen(3000)