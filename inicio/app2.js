var calculadora = require('./calculadora') // importanto o arquivo de modulos

console.log(calculadora.soma(10,20)) // usando as funções do modulo

console.log(calculadora.div(10,20))

console.log(calculadora.mult(10,20))

console.log(calculadora.sub(10,20))

console.log(calculadora.nome) // utilizando variavel

calculadora.nome = 'Calculadora' // para alterar variaveis