const usersGames = require('./usersGames.js/index.js');

module.exports = function(app, db){
  usersGames(app, db);
};
