const mongoose = require('mongoose')
const User = require('../../models/user')

const user = () => {
  return {
    anthenticate: ({email, password}) => {
      return new Promise((resolve) => {
        User.findOne({'email': email, 'password': password}, (err, result) => {
          resolve({result})
        })
      })
    }
  }
}

module.exports = user;
