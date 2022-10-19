const express = require('express')
const app = express()
const port = 4005

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/animal/:animal', async (req, res) => {
  console.log('got req! ' + req.params.animal);
  await sleep(3000);
  const retdata = {
    'animal': req.params.animal,
    'time': new Date().toLocaleString()
  };
  res.json(retdata)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

