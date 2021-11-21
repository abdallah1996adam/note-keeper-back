const express = require('express')

const userController = require('./controller')

const userRouter = express.Router();

const entrypoint = "/users"

userRouter
.route(entrypoint)
.post(userController.register)

userRouter.route(`${entrypoint}/auth`).post(userController.login)

module.exports = userRouter


