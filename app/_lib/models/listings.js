import db from '../database/db.js'

export const getAll = () => {
  const listings = db.prepare(/*sql*/ `
    SELECT *, '£' || (price * 1000) AS formatted_price
    FROM products
  `)

  return listings.all()
}

export const getProductById = (id) => {
  const product = db.prepare(
    /*sql*/ `SELECT *, '£' || (price * 1000) AS formatted_price FROM products WHERE id = ?`
  )

  return product.get(id)
}
