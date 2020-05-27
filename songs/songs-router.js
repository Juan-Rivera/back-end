const router = require('express').Router()
const Songs = require('./songs-model')
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://spotify-3-ds.herokuapp.com/dummy_data')
    .then(response => {
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.get('/saved', (req, res) => {
    Songs.findSavedSongs()
    .then(songs => {
        res.status(200).json(songs)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Songs.findById(id)
    .then(song => {
        res.status(200).json(song)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.post('/', (req, res) => {
    Songs.add(req.body)
    .then(song => {
        res.status(201).json(song)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.post('/save', (req, res) => {
    Songs.save(req.body)
    .then(song => {
        return res.status(200).json(song)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Songs.update(changes, id)
    .then(song => {
        res.status(200).json(song)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Songs.remove(id)
    .then(song => {
        if(!song){
            res.status(404).json({error: 'Could not find song by that ID'})
        } else {
            res.json({ message: 'successfully removed'})
        }
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})


module.exports = router