const express = require('express')
const app = express()

// express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (rew, res) => {
    res.render("perguntar")
})

app.listen(8080, () => {
    console.log('App rodando...')
})