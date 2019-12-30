const Skills = require('../models/Skills');

module.exports = {

    get: (param) => {
        return new Promise((resolve, reject) => {
            Skills.find(param)
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
            Skills.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('Skill ' + id + ' not found'))
            })
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Skills.create(params)
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
          Skills.findByIdAndUpdate(id, params, {new: true})
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
          Skills.findByIdAndRemove(id)
          .then(() => {
              resolve({id: id})
          })
          .catch(err => {
              reject(err)
          })
      })
    }
}
