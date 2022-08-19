const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/customers', (req,res) => {
    res.send([
      {
        'id': 1,
        'image': 'https://placeimg.com/60/60/1',
        'name': 'hms',
        'birthday': '891106',
        'gender': 'male',
        'job': 'junior'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/60/60/2',
        'name': 'ymj',
        'birthday': '980506',
        'gender': 'female',
        'job': 'junior'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/60/60/4',
        'name': 'bjy',
        'birthday': '750405',
        'gender': 'female',
        'job': 'senior'
      }])
})
app.listen(port, ()=> console.log(`Listening on port ${port}`))

