const request = require("./helpers/network/request")

const Helper = require("./helpers/error_to_string")

class Markets {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async listAllMarkets() {
        try {
            const response = await this.request.get(`markets`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async listMarketTickers() {
        try {
            const response = await this.request.get(`markets/tickers`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async fetchMarketTicker(market) {
        try {
            const response = await this.request.get(`markets/tickers/${market}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async fetchOrderBookItemsForAMarket(market, askLimit, bidsLimit) {
        try {
            const response = await this.request.get(`markets/${market}/order_book?asks_limit=${askLimit}&bids_limit=${bidsLimit}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async fetchMarketTickerDepth(market, limit) {
        try {
            const response = await this.request.get(`markets/${market}/depth?limit=${limit}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async fetchKLineDataWithPendingTradesForAMarket(market, limit, period, timestamp) {
        try {
            const response = await this.request.get(`markets/${market}/k_with_pending_trades/2242?limit=${limit}&period=${period}&timestamp=${timestamp}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Markets
