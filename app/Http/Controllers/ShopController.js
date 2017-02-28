'use strict'
const Shop = use('App/Model/Shop')
const Helpers = use('Helpers')
const File = use('File')
const Validator = use('Validator')

class ShopController {

  * index(request, response) {
    const shop = yield Shop.all()
    response.status(200).json(shop)
  }

  * store(request, response) {
    let data = request.all()
    const valid = yield Validator.validate(data, Shop.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      })
      return
    }
    yield Shop.create(data);
    response.status(200).json({
      message: "Shop salvo com sucesso"
    })
  }

  * update(request, response) {
    let data = request.all()
    const id = request.param('id')
    const valid = yield Validator.validate(data, Shop.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      });
    }
    let update = yield Shop.findBy('id', id)
    update.fill(data)
    yield update.save()
    response.status(200).json({
      message: "Shop atualizado com sucesso"
    })
  }

  * destroy(request, response) {
    const id = request.param('id')
    let shop = yield Shop.findBy('id', id)
    if (shop === null) {
      response.status(400).json({
        message: "Shop não existe"
      })
      return
    }
    yield shop.delete()
    response.status(200).json({
      message: "Shop deletado com sucesso"
    })
  }
}
module.exports = ShopController
