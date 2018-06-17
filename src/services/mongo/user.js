const mongoose = require('mongoose')
const User = require('../../models/user')

const user = () => {
  return {
    findAll: () => {
      return new Promise((resolve, reject) => {
        User.find()
          .select('-__v')
          .exec((err, result) => {
            if (err) {
              reject({ err })
              return
            }
            resolve({ result })
          })
      })
    },
    save: ({ name, email, password }) => {
      return new Promise((resolve) => {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: name,
          email: email,
          password: password
        })
        user.save((err, result) => {
          if (err) {
            reject({ err })
            return
          }
          resolve({ result })
        })
      })
    }
  }
}

module.exports = user;
