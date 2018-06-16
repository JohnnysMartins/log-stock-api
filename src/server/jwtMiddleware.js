const jwt = require('jsonwebtoken');

const jwtMiddleware = ({ exclusions }) => {
	return async (req, res, next) => {
		if (!exclusions.includes(req.href())) {
			const token = req.headers['x-access-token'];
			if (!token) {
				res.json(403, { error: 'Token não fornecido' })
				return
			}

			try {
				req.decoded = jwt.verify(token, process.env.JWT_SECRET);
			} catch (error) {
				res.json(403, { error: 'falha ao autenticar o token' });
				return
			}
		}
		next()
	}
}

module.exports = jwtMiddleware