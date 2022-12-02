const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const pokemons = require('./models/pokemons.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => { })

app.get('/pokemon/', (req, res) => {
    res.render('Index', {pokemons: pokemons})
})

app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id)
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
