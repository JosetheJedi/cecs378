const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hello! this is for my CECS 378 class!!! :)')
})
app.listen(3000, () => console.log('Server running on port 3000'))