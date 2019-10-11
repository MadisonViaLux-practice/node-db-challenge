const express = require('express')
const Pro = require('./project-model')
const router = express.Router()


router.get('/', (req, res) => {
    Pro.find()
        .then(pro => res.json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects table' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Pro.findById(id)
        .then(pro => res.json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects by ID' })
        })
})



module.exports = router