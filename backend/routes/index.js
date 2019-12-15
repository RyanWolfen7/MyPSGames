const express = require('express')
const router = express.Router()
const Game = require('../models/games')

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/addGame', async (req, res) => {
  console.log('hit')
  const { name, genre, releaseDate, players, boxArt, platforms } = req.body
  const game = new Game({
    name, genre, releaseDate, players, boxArt, platforms  
  })

  try { 
    const newGame = await game.save()
    res.status(201).json(newGame)
  } catch (error) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
