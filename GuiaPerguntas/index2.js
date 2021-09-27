const express = require('express')
const app = express()

// express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMSG = !true

    var produtos = [
        {nome: 'Doritos',
        preco: 3.14},
        {nome: 'Coca-cola',
        preco: 5},     
        {nome: 'Leite',
        preco: 1.75}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: 'Guia do programador ',
        inscritos: 8000,
        msg: exibirMSG,
        produtos: produtos
    })
})

app.listen(8080, () => {
    console.log('App rodando...')
})