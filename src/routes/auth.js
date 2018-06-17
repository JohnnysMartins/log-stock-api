module.exports = (server, db) => {
	server.post('/auth', async (req, res, next) => {
		try {
			res.send(await db.auth().anthenticate(req.body));
		} catch (error) {
			res.send(error)
		}
		next()
	});
}
