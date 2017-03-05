module.exports = (db, req, es) => {

	const { id } = req.params

	db.collection('tasks')
		.remove({ _id: ObjectId(id) })
		.then(task => {
			console.log('task has been created succesfully')
			res.json(task)
			res.setStatus(200).json(task) // devuelve exito en la operacion.
		})
		.catch(err => { throw err })
}