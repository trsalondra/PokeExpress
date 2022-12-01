const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const pokemon = require('./models/pokemon.js')

app.set('views', './views')
app.set('view engine', 'jsx')

app.engine('jsx', (filePath, options, callback) => { // 
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content.toString()

    //     .replace('#title#', '<title>' + options.title + '</title>')
    //     .replace('#title#', '<h1>' + options.title + '</h1>')
    //     .replace('#subtitle#', '<h2>' + options.subtitle + '</h2>')
    //     .replace('#image#', '<img src="' + options.imageLink + '">')
    //     .replace('#description#', '<h3>' + options.description + '</h3>')
    //     .replace('#servingTime#', '<h3>Serving Time: ' + options.servingTime + '</h3>')
    //     .replace('#level#', '<h3>Level: ' + options.level + '</h3>')
    //     .replace('#ingredients#','<h3>Ingredients</h3><ul><li>'+ options.ingredients.join('</li><br><li>') + '</li><br></li></ul>')
    //     .replace('#supplies#','<h3>What youll need</h3><ul><li>'+ options.supplies.join('</li><br><li>') + '</li><br></li></ul>')
    //     .replace('#steps#','<h3>Directions</h3><ol><li>'+ options.steps.join('</li><br><li>') + '</li><br></li></ol>')

      return callback(null, rendered)
    })
  })

app.get('/', (req, res) => {
    
})

app.get('/pokemon/', (req, res) => {
    res.render('Index')
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
