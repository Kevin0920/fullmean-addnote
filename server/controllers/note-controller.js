var mongoose = require('mongoose');
var Note = mongoose.model("Note");


module.exports = {
  create: function(req, res) {
    console.log(req.body);
    console.log("back end create route");
    
    var note = new Note({note: req.body.note});
    
    note.save(function(err) {
      if (err) {
        console.log("can't save notes");
        res.json({err:err});
      }
      else {
        res.json("Success");
      }
    })
  },
  
  allNotes: function(req, res) {
    console.log("back end get all notes");
    Note.find({}).sort("createdAt").exec(function(err, notes) {
      if (err) {
        console.log("fail get notes", err);
      }
      res.json(notes);
    })
  },
  
  destory: function(req, res) {
    console.log("back-end destory method");
    Note.remove({_id: req.params.id}, function(err) {
      if (err) {
        console.log("Delete Error", err);
      }
      console.log("delete successfully");
      res.redirect(303, "/notes");
    })
  }
  
  
}