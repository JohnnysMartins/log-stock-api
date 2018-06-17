const auth = require('./auth')
const user = require('./user')

module.exports = (server) => {
  auth(server)
  user(server)
}
