const express = require('express')
const app = express()

const routes = require('./routes/routes')

app.use(routes)

app.listen(5000)