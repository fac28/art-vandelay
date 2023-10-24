import db from '../database/db.js'

export const getAll = () => {
  const listings = db.prepare(/*sql*/ `SELECT * FROM products`)
  return listings.all()
}

export const getProductById = (id) => {
  const product = db.prepare(/*sql*/ `SELECT * FROM products WHERE id = ?`)
  return product.get(id)
}
