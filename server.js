const express = require('express')
const bodyParser = require('body-parser')

// list of all routers
const routerUser = require('./routes/user')


const app = express()
app.use(bodyParser.json())

// add routers 
app.use(routerUser)



app.get('/', (req, res) => {
    res.send("welcome to application")
})

app.listen(5000, '0.0.0.0', () => {
    console.log('Server running on port no 5000')
})