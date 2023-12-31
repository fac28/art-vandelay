const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const Database = require('better-sqlite3')

const db = new Database(process.env.DB_FILE)

// const schemaPath = join(__dirname, 'schema.sql')
const schemaPath = join('./', 'app', '_lib', 'database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)

module.exports = db
