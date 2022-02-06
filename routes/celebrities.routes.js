// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('./../models/Celebrity.model')

// all your routes here

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res) => {
    const celebrity = req.body
    try {
        await Celebrity.create(celebrity)
        res.redirect('celebrities')

    } catch (error) {
        console.log(error)
        res.render('celebrities/create')
    }
    console.log(celebrity)
})

router.get('/celebrities', async (req, res) => {
    const celebrities = await Celebrity.find()
    console.log(celebrities)
    res.render('celebrities/celebrities', { celebrities })
})



module.exports = router;