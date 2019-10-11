const express = require('express');
const Projects = require('./projects/project-router')
const server = express();

server.use(express.json());
server.use('/api/projects', Projects)


server.get('/', (req, res) => {
    res.send('<h1>Hello There</h1>')
})


module.exports = server;