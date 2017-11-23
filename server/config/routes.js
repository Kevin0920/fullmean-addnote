var notes = require('../controllers/note-controller.js');
var path = require('path');


module.exports = function(app) {
  
  app.post("/notes", function(req, res) {
    notes.create(req, res);
  })
  
  app.get("/notes", function(req, res) {
    notes.allNotes(req, res);
  })
  
  app.delete("/notes/:id", function(req, res) {
    notes.destory(req, res);
  })
  
  app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})
}