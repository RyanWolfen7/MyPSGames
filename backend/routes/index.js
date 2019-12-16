const express = require('express')
const router = express.Router()
const Game = require('../models/games')


router.get('/gamesList', async (req, res) => {
  try {
    await Game.find( async (error, data) => {
      if(error) {
        res.status(400).json({error})
      } else {
        res.status(200).json(data)
      }       
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/game/:id', async (req, res) => {
  const { id } = req.params  
  try {
    await Game.findById( id, (error, data) => {
      console.log(data)
      error ? res.status(400).json({error}) : res.status(200).json(data)     
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post('/addGame', async (req, res) => {
  const { name, genre, releaseDate, publisher, boxArt, players, platforms } = req.body
  const game = new Game({
    name, genre, releaseDate, publisher, players, platforms, boxArt  
  })

  try { 
    await game.save( (error) => {
      if(error) {
        res.status(400).json({error}) 
      } else {
      res.status(201).json({message: 'Successfully uploaded', game})
      } 
    })

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
