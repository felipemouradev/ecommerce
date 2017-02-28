'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/auth', 'AuthController.login')
Route.post('/auth/register', 'AuthController.register')
Route.get('/auth/logged', 'AuthController.logged').middleware('auth')

Route.get('/shop','ShopController.index')
Route.post('/shop/store','ShopController.store')
Route.post('/shop/update/:id','ShopController.update')
Route.get('/shop/destroy/:id','ShopController.destroy')

Route.get('/category','CategoryController.index')
Route.post('/category/store','CategoryController.store')
Route.post('/category/update/:id','CategoryController.update')
Route.get('/category/destroy/:id','CategoryController.destroy')

Route.get('/product','ProductController.index')
Route.post('/product/store','ProductController.store')
Route.post('/product/update/:id','ProductController.update')
Route.get('/product/destroy/:id','ProductController.destroy')

Route.get('/order','OrderController.index')
Route.post('/order/store','OrderController.store')
Route.post('/order/update/:id','OrderController.update')
Route.get('/order/destroy/:id','OrderController.destroy')