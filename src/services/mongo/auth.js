const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

const user = () => {
  return {
    anthenticate: ({ email, password }) => {
      return new Promise((resolve, reject) => {
        User.findOne({ email: email, password: password }, (err, user) => {
          if (err) {
            reject({ err })
            return
          }
          const { email, _id } = user
          const token = jwt.sign({ email, _id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          })
          resolve({ token })
        })
      })
    }
  }
}

module.exports = user
