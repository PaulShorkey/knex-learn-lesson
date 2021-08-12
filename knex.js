const getConfig= require('./knexfile.js')

module.exports = require('knex')(getConfig()[process.env.NODE_ENV]);