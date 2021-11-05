const db = require('../../data/db-config')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById,
  }
  
  function getAll() {
    return db('products')
  }
  
  function getById(id) {
    return null
  }
  
  async function insert(product) {
    const [id]= await db('products').insert(product)
    return db('products').where({id}).first()
  }
  
  async function update(id, changes) {
    
  }
  
  function remove(id) {
    return null
  } 

