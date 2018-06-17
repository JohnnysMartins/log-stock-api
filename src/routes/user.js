const mongoose = require('mongoose');
const User = require('../models/user');



module.exports = (server) => {
  server.get('/user', (req, res, next) => {
    User.find()
      .select('-__v')
      .exec()
      .then(result => {
        res.json({ users: result })
      })
    next()
  })

  server.post('/user', (req, res, next) => {
    const { name, email, password } = req.body
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      email: email,
      password: password
    })
    user.save().then(result => { 
      res.json({ createdUser: result }) 
    }).catch(err => console.log(err))
    
    next()
  })

  server.get('/user/signup', (req, res, next) => {
    res.json({ mesage: 'rota signup' })
    next()
  })
}
