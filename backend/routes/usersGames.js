const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) { 
  app.post('/addGame', (req, res) => {
    console.log(req)
    res.send(200, {data: req})
  })
}
