var request = require('request');


request('http://localhost:3000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }



    request.post('http://localhost:3000/transacion/crear', 
    {
         form:{
             envia:'rey',
             recibe:'leo',
             cantidad:12
            }   
    })

})