const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => { })

app.get('/pokemon/', (req, res) => {
    // res.send(pokemon)
    res.render('Index')
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
