const express = require('express');
const { Server } = require('socket.io')
const { createServer } = require('http')

const app = express()
const httpServerInstance = createServer(app)
const socketInstance =  new Server(httpServerInstance, {})

app.use('/',express.static(__dirname + '/public'))

module.exports ={
    app,
    httpServerInstance,
    socketInstance,
}