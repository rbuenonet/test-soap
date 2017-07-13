var http = require('https');
var parseString = require('xml2js').parseString;


var host = 'https://webservice.s7.exacttarget.com/etframework.wsdl';

// host = 'http://correiosapi.apphb.com/cep/17012190'

http.get(host, (res) => {
        // console.log(res);
        var body = '';

        res.on('data', (retorno) => {
            body += retorno;
        })

        res.on('end', function() {
            parseString(body, function (err, result) {
                // corpo do xml
                console.log(result.definitions.types[0].schema[0]);
            });
        });
    })

