//  Add your code here
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
      type: String,
  },
  cast: {
      type: [String]
  }
})

module.exports = mongoose.model('Movie', movieSchema)
