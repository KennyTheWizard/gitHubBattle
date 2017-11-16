const mongoose = require('mongoose');
const players = require('../controllers/players.js')
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/players', players.show);
  
  app.post('/players', players.create);
  
  app.delete('/players/destroy/:id', players.destroy);
  
  app.put('/players/edit/:id', players.update);

  app.get('*', (req, res) =>{
    res.redirect('/');
  })
}