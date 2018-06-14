const auth = require('./auth')

const routes = (server) => {
  auth(server)
}

module.exports = routes
