const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}
// node mongo.js yourpassword Anna 040-1234556
// [0      1          2          3      4 ]
// tämä on process.argv array joista komentorivin parametrit tulevat,
// eli uuden henkilön nimi on arvo [3] ja numero [4] kuten muuttujissa alempana

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack2021:${password}@cluster0.i04va.mongodb.net/phonebookPeople?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    const name = process.argv[3]
    const number = process.argv[4]
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then(response => {
        console.log(`Added ${name} number ${number} to phonebook.`)
        mongoose.connection.close()
    })
}
else if (process.argv.length === 3) {
    console.log('Phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}
else {
    mongoose.connection.close()
    console.log('You have to give name and number')
    process.exit(1)
}




