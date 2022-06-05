const Quidax = require("./lib/quidax");
require('dotenv').config()

const quidax = new Quidax(process.env.QUIDAX_SECRET_API)

async function init() {
    try {

      
        
        const data = await quidax.quotes.quote({
            "market": "btcngn",
            "unit": "ngn",
            "kind": "ask",
            "total": "200000"
        })
           
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

init()