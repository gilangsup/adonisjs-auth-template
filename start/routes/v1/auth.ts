const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

export default function AuthRoute() {
    router.group(() => {
        router.post('/login', [AuthController, 'login'])
        router.post('/register', [AuthController, 'register'])
        router.delete('/logout', [AuthController, 'logout'])
        router.post('/logout', [AuthController, 'me'])
    })
}