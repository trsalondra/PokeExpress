require("dotenv").config()

// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon.js')
const app = express()
const port = 3000

// Middleware 
app.use((req, res, next) => {
  console.log("I run for all routes")
  next();
})

app.use(express.urlencoded({ extended: false }))

// Connect to Mongo
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection

mongoose.set("strictQuery", true)

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(port, () => {
      console.log('Listening on port ', port)
    })
  })
  .catch((error) => { // tacked on method, will happen if URI, username, or pw is not correct
    console.log(error)
  })


// View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/', (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemons: allPokemon, // getting all fruis from db to pass as props
    })
  })

})

// New - Get a form to create a new record
app.get('/pokemon/new', (req, res) => {
  res.render("New");
})

// Create - send the filled form to db and create a new record
app.post("/pokemon", (req, res) => {

  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon")
  })
})

app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    })
  })

  // res.render('Show', {
  //   name: Pokemon[req.params.id].name,
  //   img: Pokemon[req.params.id].img
})



//  Pokemon.updateMany({}, {$unset: {"img": ""}})
//  // if database transaction succeeds
//  .then((pokemon) => {
//      console.log(pokemon)
//  })
//  // if database transaction fails
//  .catch((error) => {
//      console.log(error)
//  })
//  // close db connection either way
//  .finally(() => {
//      db.close()
//  })




