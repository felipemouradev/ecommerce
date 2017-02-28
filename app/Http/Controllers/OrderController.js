'use strict'
const Order = use('App/Model/Order')
const Helpers = use('Helpers')
const File = use('File')
const Validator = use('Validator')

class OrderController {

  * index(request, response) {
    const order = yield Order.all()
    response.status(200).json(order)
  }

  * store(request, response) {
    let data = request.all()
    const valid = yield Validator.validate(data, Order.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      })
      return
    }
    yield Order.create(data);
    response.status(200).json({
      message: "Order salvo com sucesso"
    })
  }

  * update(request, response) {
    let data = request.all()
    const id = request.param('id')
    const valid = yield Validator.validate(data, Order.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      });
    }
    let update = yield Order.findBy('id', id)
    update.fill(data)
    yield update.save()
    response.status(200).json({
      message: "Order atualizado com sucesso"
    })
  }

  * destroy(request, response) {
    const id = request.param('id')
    let order = yield Order.findBy('id', id)
    if (order === null) {
      response.status(400).json({
        message: "Order não existe"
      })
      return
    }
    yield order.delete()
    response.status(200).json({
      message: "Order deletado com sucesso"
    })
  }
}
module.exports = OrderController
