const userModule = require('./user')()
const authModule = require('./auth')()

module.exports = {
	user: () => userModule,
	auth: () => authModule
}