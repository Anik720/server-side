const mongoose = require('mongoose');

const editorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  createdAt: { type: Date, expires: '2m', default: Date.now },
});

const Editor = mongoose.model('Editor', editorSchema);

module.exports = Editor;
