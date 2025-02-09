const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['lost', 'found'], required: true }, // "lost" or "found"
  item: { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);