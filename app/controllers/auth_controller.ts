import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { messages } from '@vinejs/vine/defaults'

export default class AuthController {

  async register({ request, response }: HttpContext) {
    // Validate the incoming request data using the register validator
    const data = await request.validateUsing(registerValidator)
  
    // Create a new user with the validated data
    await User.create(data)
  
    // Return a success response after user creation
    return response.ok({
      message: 'User registered successfully',
    })
  }

  async login({ request,response }: HttpContext) {
    const { email, password, } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '30 days',
    })

    return response.ok({
      messages: "Login Successful",
      token: token
    })
    
  }

  async logout({ auth }: HttpContext) {
    const user = auth.user!

    await User.accessTokens.delete(user, user.currentAccessToken.identifier)

    return { messages }
  }

  async me({ auth }: HttpContext) {
    await auth.check()

    return {
      user: auth.user,
    }
  }

}