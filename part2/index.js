const { app, httpServerInstance } = require('./app')
const { config } = require('dotenv')
config()

const port = process.env.PORT || 4567

httpServerInstance.listen(port, ()=>{
    console.log(`server up and listning on port ${port}`)
})