var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
  note: { type: String, require: true }
}, {timestamps: true})

mongoose.model('Note', NoteSchema);

