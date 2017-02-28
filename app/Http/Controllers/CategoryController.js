'use strict'
const Category = use('App/Model/Category')
const Helpers = use('Helpers')
const File = use('File')
const Validator = use('Validator')

class CategoryController {

  * index(request, response) {
    const category = yield Category.all()
    response.status(200).json(category)
  }

  * store(request, response) {
    let data = request.all()
    const valid = yield Validator.validate(data, Category.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      })
      return
    }
    yield Category.create(data);
    response.status(200).json({
      message: "Category salvo com sucesso"
    })
  }

  * update(request, response) {
    let data = request.all()
    const id = request.param('id')
    const valid = yield Validator.validate(data, Category.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      });
    }
    let update = yield Category.findBy('id', id)
    update.fill(data)
    yield update.save()
    response.status(200).json({
      message: "Category atualizado com sucesso"
    })
  }

  * destroy(request, response) {
    const id = request.param('id')
    let category = yield Category.findBy('id', id)
    if (category === null) {
      response.status(400).json({
        message: "Category não existe"
      })
      return
    }
    yield category.delete()
    response.status(200).json({
      message: "Category deletado com sucesso"
    })
  }
}
module.exports = CategoryController
