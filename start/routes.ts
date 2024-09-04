import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import AuthRoute from './routes/v1/auth.js'


router.get('/', async ({ response }: HttpContext) => {
  response.status(200).json({
    status: 200,
    message: 'Welcome to Document Track Be',
  })
})

router.group(() => {
  AuthRoute()
}).prefix('/api/v1')


