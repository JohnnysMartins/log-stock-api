const mongoose = require('mongoose')
const User = require('../../models/user')

const user = () => {
  return {
    findAll: () => {
      return new Promise((resolve) => {
        User.find()
          .select('-__v')
          .exec().then(res => {
            resolve({ users: res })
          })
      })
    },
    saveAll: ({ name, email, password }) => {
      return new Promise((resolve) => {
        // resolve({name, email, password})
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: name,
          email: email,
          password: password
        })
        user.save().then(result => {
          resolve({result})
        })
      })
    }
  }
}

module.exports = user;
