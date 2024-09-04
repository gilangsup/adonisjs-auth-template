import Product from '#models/product'
import { createProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    public async store({ request, response }: HttpContext) {
        //Validate product
        const data = await request.validateUsing(createProductValidator)

        await Product.create(data)

        return response.ok({
            message: 'Product registered successfully',
        })
    }
}