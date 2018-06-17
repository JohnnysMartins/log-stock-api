const mongoose = require('mongoose');
const User = require('../models/user');
const db = require('../services/mongo');

module.exports = (server) => {
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
      res.json(await db.user().saveAll(req.body))
    } catch (err) {
      res.json({ error: err })
    }
    next()
  })
}
