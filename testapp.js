const Quidax = require("./lib/quidax");
require('dotenv').config()

const quidax = new Quidax(process.env.QUIDAX_SECRET_API)

async function init() {
    try {
        const data = await quidax.instantOrder.createInstantOrder("me")
        console.log(data)
    } catch (error) {
    }
}

init()