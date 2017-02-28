'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  static get table () {
    return 'categories'
  }
  static get primaryKey () {
    return 'id'
  }
  static get rules () {
      return {
        category_name:'required',
        is_active:'required',
        user_id:'required',
        shop_id:'required',
        category_id:'required'
      }
  }

    
  user() {
    return this.belongsTo('App/Model/User')
  }

  shop() {
    return this.belongsTo('App/Model/Shop')
  }

  category() {
    return this.belongsTo('App/Model/Category')
  }

}

module.exports = Category
