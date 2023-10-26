import db from '../database/db.js'

export const getRandomImage = () => {
  const randomProduct = db.prepare(/*sql*/ `
        SELECT image
        FROM products
        ORDER BY RANDOM()
        LIMIT 1
    `)

  return randomProduct.get()
}
