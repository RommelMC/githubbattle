var battle = require('../controllers/battle.js');
module.exports = function(app) {
  app.get('/', battle.index);
  app.post('/setplayer1', battle.setp1);
  app.post('/setplayer2', battle.setp2);
  app.get('/getplayer1', battle.getp1);
  app.get('/getplayer2', battle.getp2);
  app.get('/getrankings', battle.getranks);


}
