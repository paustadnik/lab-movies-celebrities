// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require('./../models/Movie.model')
const Celebrity = require('./../models/Celebrity.model')


// all your routes here
router.get('/create', async (req, res) => {
    const celebrities = await Celebrity.find()
    res.render('movies/new-movie', { celebrities })
})

router.post('/create', async (req, res) => {
    const movie = req.body
    try {
        await Movie.create(movie)
        res.redirect('movies')

    } catch (error) {
        console.log(error)
        res.render('movies/new-movie')
    }
    console.log(movie)
})

router.get('/movies', async (req, res) => {
    const movies = await Movie.find()
    console.log(movies)
    res.render('movies/movies', { movies })
})

module.exports = router;