define({ "api": [
  {
    "type": "post",
    "url": "/product/store",
    "title": "Salva um novo produto",
    "name": "StoreProduct",
    "version": "1.0.0",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Nome do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_description",
            "description": "<p>Descrição do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_width",
            "description": "<p>Largura do produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_height",
            "description": "<p>Altura do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_price",
            "description": "<p>Preço do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_amount",
            "description": "<p>Quantidade em estoque</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "category_id",
            "description": "<p>Categoria do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_seo_tags",
            "description": "<p>Tags SEO</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"message\": \"Product salvo com sucesso\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/ProductController.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product",
    "title": "Retorna todos os produtos",
    "name": "getAllProducts",
    "version": "1.0.0",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": 3,\n   \"product_name\": \"Sapato velho 1\",\n   \"product_description\": \"Um sapato velho\",\n   \"product_weight\": 3.6,\n   \"product_height\": 0.3,\n   \"product_width\": 0.3,\n   \"product_diameter\": null,\n   \"product_price\": 26.75,\n   \"product_amount\": 12,\n   \"product_slug\": \"sapato_velho\",\n   \"created_at\": \"2017-02-28 14:19:26\",\n   \"updated_at\": \"2017-02-28 14:19:26\",\n   \"inactivated_at\": null,\n   \"visited_hits\": 0,\n   \"sold_hits\": 0,\n   \"category_id\": 2,\n   \"product_seo_tags\": \"sapato,velho,tenis,pe\",\n   \"category\": {\n     \"id\": 2,\n     \"category_name\": \"Calçados\",\n     \"category_id\": 0\n   }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/ProductController.js",
    "groupTitle": "Product"
  }
] });
