const Quidax = require("./lib/quidax");
require('dotenv').config()

const quidax = new Quidax(process.env.QUIDAX_SECRET_API)

async function init() {
    try {

        const data2 = await quidax.markets.fetchMarketTicker("btcngn")
        console.log(data2)
        
        const data = await quidax.quotes.quote(
            "btcngn",
            "btc",
            "bid",
            "2"
        )
        console.log(data)

    } catch (error) {
    }
}

init()