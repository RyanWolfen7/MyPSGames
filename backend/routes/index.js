const usersGames = require('./usersGames.js');

module.exports = function(app, db){
  usersGames(app, db);
};
