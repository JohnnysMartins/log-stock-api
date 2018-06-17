require('dotenv').config()
const server = require('./server/app')
require('./server/database')


const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}`)
})