module.exports = (server) => {
  server.get('/auth', (req, res, next) => {
    res.json({mesage: 'Seja bem-vindo', route: 'Rota de autenticacao'})
    next()
  })
  
  server.get('/path', (req, res, next) => {
    res.json({mesage: 'rota de path !'})
    next()
  })
}
