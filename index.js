const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/times', (req, res) => {
    let result = ''
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    res.send(result)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))