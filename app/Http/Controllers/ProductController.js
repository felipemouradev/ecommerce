'use strict'
const Product = use('App/Model/Product')
const Helpers = use('Helpers')
const File = use('File')
const Validator = use('Validator')

class ProductController {
  /**
   * @api {get} /product Retorna todos os produtos
   * @apiName getAllProducts
   * @apiVersion 1.0.0
   * @apiGroup Product
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * [{
   *    "id": 3,
   *    "product_name": "Sapato velho 1",
   *    "product_description": "Um sapato velho",
   *    "product_weight": 3.6,
   *    "product_height": 0.3,
   *    "product_width": 0.3,
   *    "product_diameter": null,
   *    "product_price": 26.75,
   *    "product_amount": 12,
   *    "product_slug": "sapato_velho",
   *    "created_at": "2017-02-28 14:19:26",
   *    "updated_at": "2017-02-28 14:19:26",
   *    "inactivated_at": null,
   *    "visited_hits": 0,
   *    "sold_hits": 0,
   *    "category_id": 2,
   *    "product_seo_tags": "sapato,velho,tenis,pe",
   *    "category": {
   *      "id": 2,
   *      "category_name": "Calçados",
   *      "category_id": 0
   *    }
   *}]
   */
  * index(request, response) {
    const product = yield Product.with('category').scope('category', (builder) => {
      builder.select('id', 'category_name', 'category_id')
    }).fetch()
    response.status(200).json(product)
  }

  /**
   * @api {post} /product/store Salva um novo produto
   * @apiName StoreProduct
   * @apiVersion 1.0.0
   * @apiGroup Product
   * @apiParam {String} product_name Nome do Produto
   * @apiParam {String} product_description Descrição do Produto
   * @apiParam {Number} product_width Largura do produto
   * @apiParam {Number} product_height Altura do Produto
   * @apiParam {Number} product_price Preço do Produto
   * @apiParam {Integer} product_amount Quantidade em estoque
   * @apiParam {String} product_slug Slug
   * @apiParam {Integer} category_id Categoria do Produto
   * @apiParam {String} product_seo_tags Tags SEO
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   *  {
   *    "message": "Product salvo com sucesso"
   *  }
   **/ 
  * store(request, response) {
    let data = request.all()
    const valid = yield Validator.validate(data, Product.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      })
      return
    }
    yield Product.create(data);
    response.status(200).json({
      message: "Product salvo com sucesso"
    })
  }

  * update(request, response) {
    let data = request.all()
    const id = request.param('id')
    const valid = yield Validator.validate(data, Product.rules)
    if (valid.fails()) {
      response.status(400).json({
        erros: valid.messages()
      });
    }
    let update = yield Product.findBy('id', id)
    update.fill(data)
    yield update.save()
    response.status(200).json({
      message: "Product atualizado com sucesso"
    })
  }

  * destroy(request, response) {
    const id = request.param('id')
    let product = yield Product.findBy('id', id)
    if (product === null) {
      response.status(400).json({
        message: "Product não existe"
      })
      return
    }
    yield product.delete()
    response.status(200).json({
      message: "Product deletado com sucesso"
    })
  }
}
module.exports = ProductController
