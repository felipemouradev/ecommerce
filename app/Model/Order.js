'use strict'

const Lucid = use('Lucid')

class Order extends Lucid {
  static get table () {
    return 'orders'
  }
  static get primaryKey () {
    return 'id'
  }
  static get rules () {
      return {
        order_ref_name:'required',
        order_price_total:'required',
        payment_method_id:'required',
        customer_id:'required',
        tracking_code:'required'
      }
  }

    
  payment_method() {
    return this.belongsTo('App/Model/PaymentMethod')
  }

  customer() {
    return this.belongsTo('App/Model/Customer')
  }

}

module.exports = Order
