var express = require ('express')
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')

var app = express()
var PORT = 3000

var getTasks = require('./router/getTasks')
var postTask = require('./router/post')
var getById = require('./router/getById') 
var deleteTask = require('./router/delete')
var updateTask = require('./router/update')

var urlDb = 'mongodb://localhost:27017/test'


app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


MongoClient.connect(urlDb)
	.then(db => {

      app.get('/tasks', getTasks.bind(null, db))

      app.post('/tasks', postTask.bind(null, db))

      app.get('/tasks/:id', getById.bind(null, db))

      app.get('/tasks/:id', deleteTask.bind(null, db))

      app.put('/tasks/:id', updateTask.bind(null, db))



	})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))

//algunos metodos no devuelven cursor tal como son remove, insert o alguno otro..
//por o tanto no podemos aplicarle metodos de cursor como toArray..
