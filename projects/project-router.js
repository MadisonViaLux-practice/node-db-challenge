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


router.post('/:id/task', (req, res) => {
    const newTask = req.body;
    const { id } = req.params; 
  
    Pro.findTask(id)
    .then(task => {
        if(task) {
            Pro.addTask(newTask)
                .then(t => {
                    res.status(201).json(t);
                })
        } else {
            res.status(404).json({ message: 'Could not find task given id.' })
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
    });
});







//Resource routes
router.get('/:id/task/res', (req, res) => {
    const { id } = req.params

    Pro.findRes(id)
        .then(pro => res.json(pro))
        .catch(err => {
            res.status(500).json({ message: 'failed to get Resource table' })
        })
})


router.post('/:id/task/res', (req, res) => {
    const newRes = req.body;
    const { id } = req.params; 
  
    Pro.findRes(id)
    .then(resc => {
        if(resc) {
            Pro.addRes(newRes)
                .then(t => {
                    res.status(201).json(t);
                })
        } else {
            res.status(404).json({ message: 'Could not find resource given id.' })
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' });
    });
});






module.exports = router