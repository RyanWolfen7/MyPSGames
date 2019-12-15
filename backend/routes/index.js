const express = require('express')
const router = express.Router()
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const Game = require('../models/games')

router.get('/gamesList', async (req, res) => {
  try {
    await Game.find( (error, data) => {
      error ? res.status(400).json({error}) : res.status(200).json(data)     
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post('/addGame', async (req, res) => {
  const { name, genre, releaseDate, players, platforms } = req.body
  const game = new Game({
    name, genre, releaseDate, players, platforms  
  })

  try { 
    await game.save( (error) => {
      error ? res.status(400).json({error}) : res.status(201).json({message: 'Successfully uploaded', game})
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
