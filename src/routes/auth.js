const authRouter = (server) => {
  server.get('/auth', (req, res, next) => {
    res.json({mesage: 'rota de autenticacao !'})
    next()
  })
}

module.exports = authRouter
