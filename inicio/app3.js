// HTTP

var http = require('http')

http.createServer(function(requisicao, resposta){
     resposta.end('<h1>Bem vindo ao meu site!</h1><h4>guiadoprogramador.com</h4>')
}).listen(8181) // criar servidor http

console.log('Mer servidor esta rodando...')

