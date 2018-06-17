module.exports = (server, db) => {
  server.get('/user', async (req, res, next) => {
    try {
      res.json(await db.user().findAll())
    } catch (err) {
      res.json({ error: err })
    }
    next()
  })

  server.post('/signup', async (req, res, next) => {
    try {
      res.json(await db.user().save(req.body))
    } catch (err) {
      res.json({ error: err })
    }
    next()
  })
}
