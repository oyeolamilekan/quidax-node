const Quidax = require('../../lib/quidax');
require('dotenv').config()

const quidax = new Quidax(process.env.QUIDAX_SECRET_API)

module.exports = quidax
