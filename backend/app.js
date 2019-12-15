require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

mongoose.connect(process.env.REACT_APP_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const indexRouts = require('./routes/index')
app.use('/', indexRouts)

app.listen(5000, () => console.log('We are live on port: 5000'))
