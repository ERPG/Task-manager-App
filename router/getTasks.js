module.exports = (db, req, res) => {

	db.collection('tasks')
	.find()
	.toArray((err, task) => {
		res.json(task)
	})
}