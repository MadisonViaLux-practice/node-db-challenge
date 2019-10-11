const express = require('express')
const Pro = require('./project-model')
const router = express.Router()

//Project Routes
router.get('/', (req, res) => {
    Pro.find()
        .then(pro => res.status(200).json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects table' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Pro.findById(id)
        .then(pro => res.status(200).json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects by ID' })
        })
})

router.post('/', (req, res) => {
    const newData = req.body

    Pro.add(newData)
        .then(pro => res.status(201).json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects table' })
        })
})



//Task Routes
router.get('/:id/task', (req, res) => {
    const { id } = req.params

    Pro.findTask(id)
        .then(pro => res.json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get tasks table' })
        })
})









// router.get('/res', (req, res) => {
//     Pro.findRes()
//         .then(pro => res.json(pro))
//         .catch(err => {
//             res.status(500).json({ message: 'failed to get projects table' })
//         })
// })

// router.get('/res/:id', (req, res) => {
//     const { id } = req.params

//     Pro.findResById(id)
//         .then(pro => res.json(pro))
//         .catch(err => {
//             res.status(500).json({ message: 'failed to get projects by ID' })
//         })
// })







module.exports = router