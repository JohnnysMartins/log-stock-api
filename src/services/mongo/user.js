const mongoose = require('mongoose')
const User = require('../../models/user')

module.exports = () => {
  return {
    findAll: () => {
      return new Promise((resolve, reject) =>{
        User.find()
          .select('-__v')
          .exec()
      })
    },
    saveOne: (name, email, password) => {
      return new Promise((resolve, reject) =>{
        
      })
    }
  }
}
