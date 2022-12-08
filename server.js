const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => { 
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/', (req, res) => {
    res.render('Index', {pokemons: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
  res.render('Show',{
    name: pokemon[req.params.id].name,
    img: pokemon[req.params.id].img
    })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
