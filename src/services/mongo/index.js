const userModule = require('./user')()

module.exports = {
	user: () => userModule
}