const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgresql://DavRuiz07:v2_3wYg6_9WKhiuCFcWGdKJC5rasBDCe@db.bit.io/DavRuiz07/grace-shopper`,
  {
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  })

  
module.exports = db
