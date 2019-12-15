const express = require('express')
const router = express.Router()
const Game = require('../models/games')

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/addGame', async (req, res) => {
  const { name, genre, releaseDate, players, boxArt, platforms } = req.body
  const game = new Game({
    name, genre, releaseDate, players, boxArt, platforms  
  })
  console.log(req.body)

  try { 
    const newGame = await game.save( (error) => {
      if (error) {
        res.status(400).json({error})
      }
      else {
        res.status(201).json({message: 'Successfully uploaded', game})
      }
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
