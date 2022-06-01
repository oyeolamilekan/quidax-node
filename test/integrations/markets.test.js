const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Markets Collection", () => {
    let markets;

    it("list all markets", async () => {
        try {
            const data = await quidax.markets.listAllMarkets()
            markets = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("list all market tickers", async () => {
        try {
            const data = await quidax.markets.listMarketTickers()
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("fetch a market ticker", async () => {
        try {
            const data = await quidax.markets.fetchMarketTicker(markets[0].id)
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("fetch orderbook for market", async () => {
        try {
            const data = await quidax.markets.fetchOrderBookItemsForAMarket(markets[0].id, 10, 10)
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("fetch orderbook for market ticker depth.", async () => {
        try {
            const data = await quidax.markets.fetchMarketTickerDepth(markets[0].id, 10)
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("fetch orderbook for market ticker depth.", async () => {
        try {
            const data = await quidax.markets.fetchKLineDataWithPendingTradesForAMarket(markets[0].id, 30, 60, 1548260801)
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

})