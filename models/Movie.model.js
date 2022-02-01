//  Add your code here
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
    title: String,
    required: true,
  },
  occupation: {
    genre: String,
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
