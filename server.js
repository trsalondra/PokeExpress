require("dotenv").config()

// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Pokemon = require('./models/pokemon.js')
const app = express()
const port = 3000

// Middleware 
app.use(methodOverride('_method'))
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


// Index route = Show all records
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

// Delete - Delete this one record
app.delete('/pokemon/:id', (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/pokemon');//redirect back to fruits index
  })
})

// Update - Modifying a record
app.put('/pokemon/:id', (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
    console.log(updatedPokemon)
    res.redirect(`/pokemon/${req.params.id}`) // redirecting to the show page
  })
})

// Create - send the filled form to db and create a new record
app.post("/pokemon", (req, res) => {

  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon")
  })
})

// Edit - Get the form with the record to update
app.get('/pokemon/:id/edit', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    if (!err) {
      res.render(
        'Edit',
        {
          pokemon: foundPokemon
        }
      )
    } else {
      res.send({ msg: err.message })
    }
  })
})

// Show route - Show me a particular record
app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    })
  })

})


// const manyPokemon = [
//   {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//   {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//   {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//   {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//   {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//   {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//   {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
// ]

// Pokemon.insertMany(manyPokemons)
//   // if database transaction succeeds
//   .then((pokemon) => {
//       console.log(pokemon)
//   })
//   // if database transaction fails
//   .catch((error) => {
//       console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//       db.close()
//   })

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




