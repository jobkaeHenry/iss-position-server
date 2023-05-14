const rateLimit = require('express-rate-limit')
const 분 = 1000*60

const apiLimiter = rateLimit({
  windowMs: 1 * 분,
  max: 300,
})
module.exports = apiLimiter