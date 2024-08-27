const { app } = require('./app')

const port = process.env.PORT || 8546

app.listen(port, function(){
    console.log(`server listening on ${port}`)
})