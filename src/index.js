require('dotenv').config()
const server = require('./server/app')

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}`)
})