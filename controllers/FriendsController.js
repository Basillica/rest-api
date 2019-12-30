const Friends = require('../models/Friends');

module.exports = {

    get: (param) => {
        return new Promise((resolve, reject) => {
            Friends.find(param)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            Friends.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('Friends ' + id + ' does not exist!'))
            })
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            // hash password if need be before creation
            Friends.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    put: (id, params) => {
      return new Promise((resolve, reject) => {
          Friends.findByIdAndUpdate(id, params, {new: true})
          .then(data => {
              resolve(data)
          })
          .catch(err => {
              reject(err)
          })
      })
    },

    delete: (id) => {
      return new Promise((resolve, reject) => {
          Friends.findByIdAndRemove(id)
          .then(() => {
              resolve({id: id})
          })
          .catch(err => {
              reject(err)
          })
      })
    }
}
