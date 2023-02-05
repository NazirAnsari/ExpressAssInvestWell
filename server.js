const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/details', (req, res) => {
    console.log("User Details", req.query);
    let userDetails = req.query;
    res.send(userDetails);
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})