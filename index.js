const express = require('express')
const intervalFunc = require('./controller/utils/intervalFunc')
const IssLocationController = require('./controller/IssLocationController')
const cors = require('cors')
const apiLimiter = require('./middleware/apiLimiter')

intervalFunc()

const app= express()
app.use(cors({
  // origin: "http://localhost:3000",
  origin: "*",
  credentials: true,
  methods: ["GET"],
}))
app.use(apiLimiter)
app.use('/',IssLocationController)

app.listen(3001)