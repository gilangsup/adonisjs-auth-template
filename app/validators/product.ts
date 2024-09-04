import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(50).unique(async (db, value) => {
      // Check if the product name already exists in the 'products' table
      const match = await db.from('products').select('id').where('name', value).first()
      return !match  // Return true if there is no match, meaning the name is unique
    }),
  })
)
