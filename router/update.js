module.exports = (db, req, es) => {

	const { id } = req.params
	
	const {title, done } = req.body
	const updateAt = Date.now()
	done = done === 'true' ? true : false

	db.collection('tasks')
		.update({ _id: ObjectId(id) }, {title, done, createdAt})
		.then(task => {
			console.log('task has been created succesfully')
			res.json(task)
			res.setStatus(200).json(task) // devuelve exito en la operacion.
		})
		.catch(err => { throw err })
}