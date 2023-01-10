const { request } = require('express')
const express = require('express')
const db = require('../db')

const router = express.Router()

router.post('/user/signup', (request, response) => {
    const { firstName, lastName, email, password } = request.body

    const statement = `insert into signup (firstName, lastName, email, password) values(
        '${firstName}','${lastName}','${email}','${password}')`

    db.execute(statement, (error, result) => {
        if (error) {
            //There is an error while performing the operation
            console.log(`error : '${error}'`)
            response.send('error occured')
        }
        else {
            // data found means no error
            console.log(result)
            response.send('okay')
        }
    })

})

module.exports = router