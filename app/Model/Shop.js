'use strict'

const Lucid = use('Lucid')

class Shop extends Lucid {
  static get table () {
    return 'shops'
  }
  static get primaryKey () {
    return 'id'
  }
  static get rules () {
      return {
        shop_name:'required',
        shop_impact_phrase:'required',
        shop_definition:'required',
        shop_template:'required',
        user_id:'required'
      }
  }

    
  user() {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Shop
