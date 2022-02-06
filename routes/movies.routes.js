// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require('./../models/Movie.model')
const Celebrity = require('./../models/Celebrity.model');
const { route } = require(".");
const { redirect } = require("express/lib/response");


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
        res.render('movies/create')
    }
    console.log(movie)
})

router.get('/movies', async (req, res) => {
    const movies = await Movie.find()
    //console.log(movies)
    res.render('movies/movies', { movies })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const movie = await Movie.findById(id).populate('cast')
    res.render('movies/movie-details', { movie })
})

router.post('/:id/delete', async (req, res) => {
    const id = req.params.id
    await Movie.findByIdAndDelete(id)
    res.redirect('/movies')
})

router.get('/:id/edit', async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    const celebrities = await Celebrity.find()
    res.render('movies/edit-movie', { movie, celebrities })
})

router.post('/:id/edit', async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    movie.title = req.body.title
    movie.genre = req.body.genre
    movie.plot = req.body.plot
    movie.cast = req.body.cast
    try {
        await movie.save()
        res.redirect('/movies/movies')
    } catch (error) {
        res.redirect(`/movies/${movie.id}/edit`)
    }
})

module.exports = router;