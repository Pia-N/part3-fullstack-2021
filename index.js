const express = require("express");
const app = express();

app.use(express.json());
const morgan = require("morgan");

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

app.get("/api/persons", (request, response) => {
  response.json(persons);
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id)

  if (person) {
    response.json(person);
  } else {
    response.status(404).end()
  }
})

app.get("/info", (request, response) => {
  const howMany = persons.length.toString()
  const info = `Phonebook has information of ${howMany} people.<br> ${new Date()}</br>`

  response.send(info)
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const randomId = Math.floor(Math.random() * 1000000)
  return randomId + 1
};

app.post("/api/persons", (request, response) => {
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

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
