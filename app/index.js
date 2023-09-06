const express = require('express')
const app = express()
const port = process.env.APP_PORT | 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`ExpressCommerce listening on port ${port}`)
})