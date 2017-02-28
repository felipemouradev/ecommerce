'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {
  static get table () {
    return 'products'
  }
  static get primaryKey () {
    return 'id'
  }
  static get rules () {
      return {
        product_name:'required',
        product_description:'required',
        product_weight:'required',
        product_height:'required',
        product_width:'required',
        //product_diameter:'required',
        product_price:'required',
        product_amount:'required',
        product_slug:'required',
        //visited_hits:'required',
        //sold_hits:'required',
        category_id:'required',
        product_seo_tags:'required'
      }
  }

    
  category() {
    return this.belongsTo('App/Model/Category')
  }

}

module.exports = Product
