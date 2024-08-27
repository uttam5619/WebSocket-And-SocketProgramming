import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

import { Server } from 'socket.io'
import { createServer } from 'http';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServerInstance = createServer(app)
const socketIo = new Server(httpServerInstance,{}) 

app.use('/', express.static(__dirname + '/public'));

export {
    app,
    socketIo
}
