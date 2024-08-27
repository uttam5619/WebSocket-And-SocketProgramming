const express = require('express')

const { Server } = require('socket.io')
const { createServer } = require('http')

const app = express()
const httpServerInstance = createServer(app)
const socketIo = Server(httpServerInstance, {})

app.use('/', express.static(__dirname + '/public'))

module.exports = {
    app,
    socketIo
}