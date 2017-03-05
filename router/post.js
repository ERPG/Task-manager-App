module.exports = (db, req, res) => {

	const { title } = req.body //cada input es una propiedad del body por lo tanto puedo capturar el valor con .body
	const createdAt = Date.now()
	const done = false

	db.collection('tasks')
		.insert({ title, done, createdAt })
		.then(task => {
			console.log('task has been created succesfully')
			res.setStatus(200).json(task) // devuelve exito en la operacion.
		})
		.catch(err => { throw err })


}