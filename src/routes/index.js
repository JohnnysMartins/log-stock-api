const db = require('../services/mongo');
const auth = require('./auth')
const user = require('./user')

module.exports = (server) => {
  auth(server, db)
  user(server, db)
}
