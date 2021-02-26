require('dotenv').config()
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static('build'))

const morgan = require("morgan");

const Person = require('./models/person')

const cors = require('cors')
app.use(cors())


let persons = [
  {
    name: "Arto Hellas",
    number: "040-345 67852",
    id: 1,
  },
  {
    name: "Dan Smith",
    id: 144950,
    number: "49-346972 9876",
  },
  {
    name: "Ada Lovelace",
    number: "39-3456798 45",
    id: 144951,
  },
  {
    name: "Clark Kent",
    number: "112",
    id: 144952,
  },
  {
    name: "Kerttu",
    number: "4577",
    id: 144953,
  },
  {
    name: "Mikko",
    number: "123456",
    id: 144954,
  },
  {
    name: "Kikka",
    number: "123886",
    id: 144955,
  },
];

app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(" ")
})
)


app.get("/", (request, res) => {
  res.send("<h1>Hello World!</h1>");
})

app.get('/api/persons', (request, response, next) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
    .catch(error => next(error))
})


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.get("/info", (request, response, next) => {
  Person.countDocuments({})
    .then(count => {
      response.send(`Phonebook has information of ${count} people.<br> ${new Date()}</br>`)
    })
    .catch(error => next(error))

})

//DELETE

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//POST
app.post("/api/persons", (request, response, next) => {
  const body = request.body
  console.log(body, "body")


  if (!body.name) {
    return response.status(400).json({
      error: "name missing"
    })
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing"
    })
  }

  if (persons.find(p => p.name.toUpperCase() === body.name.toUpperCase())) {
    return response.status(400).json({
      error: "name already exists"
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })
  person.save().then(response => {
    console.log(`Added ${person.name} number ${person.number} to phonebook.`)
  })
    .catch(error => next(error))

  persons = persons.concat(person)
  response.json(person)
})
//PUT
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
