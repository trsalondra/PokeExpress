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
  res.render('Show',{
    name: pokemons[req.params.id].name,
    img: pokemons[req.params.id].img
    })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
