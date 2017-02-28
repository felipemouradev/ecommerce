'use strict'
const User = use('App/Model/User')
const Hash = use('Hash')
class AuthController {

  * login(request, response) {
    let data = request.all()
    let uid = data.email
    let password = data.password

    try {
      const user = yield User.findBy('email', uid)
      const isMatchedPassword = yield Hash.verify(password, user.password)
      if (!isMatchedPassword) {
        response.unauthorized({
          error: 'Login Fail, check your credentials'
        })
      }
      const token = yield request.auth.generate(user)
      response.ok({
        message: 'Logged in successfully',
        token: token,
        status: 200
      })
    } catch (e) {
      response.unauthorized({
        error: e.message
      })
    }
  }

  * register(request, response) {
    let data = request.all()
    const result = yield User.create(data)
    const token = yield request.auth.generate(result)
    response.json(token)
  }

  * logged(request, response) {
    response.ok("oi")
  }
}

module.exports = AuthController
