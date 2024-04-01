const express = require("express")
const apiRouter = express.Router()
const {getMovie} = require('..movieController.js')

apiRouter.route('/').get(getMovie)

module.exports = apiRouter;