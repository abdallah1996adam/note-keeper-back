const express = require('express')
const noteController = require('./controller')

const noteRoute = express.Router();

const entrypoint = '/notes'

noteRoute
.route(entrypoint)
.get(noteController.getAll)
.post(noteController.getOne)

noteRoute.route(`${entrypoint}/:id`).post(noteController.getById)

module.exports = noteRoute


