const express = require('express')
const app = express()

let persons = [
          {
            "name": "Arto Hellas",
            "number": "040-345 67852",
            "id": 1
          },
          {
            "name": "Dan Smith",
            "id": 144950,
            "number": "49-346972 9876"
          },
          {
            "name": "Ada Lovelace",
            "number": "39-3456798 45",
            "id": 144951
          },
          {
            "name": "Clark Kent",
            "number": "112",
            "id": 144952
          },
          {
            "name": "Kerttu",
            "number": "4577",
            "id": 144953
          }, 
          {
            "name": "Mikko",
            "number": "123456",
            "id": 144954
          },
          {
            "name": "Kikka",
            "number": "123886",
            "id": 144955
          }
        ]


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})