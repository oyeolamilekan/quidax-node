const request = require("./helpers/network/request")

const Helper = require("./helpers/error_to_string")

class Markets {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * List all the markets
     * @returns {Promise<any | undefined>} The response
     */
    async listAllMarkets() {
        try {
            const response = await this.request.get(`markets`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * List all market tickers
     * @returns {Promise<any | undefined>} The response
     */
    async listMarketTickers() {
        try {
            const response = await this.request.get(`markets/tickers`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch a market ticker.
     * @param {string} market 
     * @returns {Promise<any | undefined>} The response
     */
    async fetchMarketTicker(market) {
        try {
            const response = await this.request.get(`markets/tickers/${market}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch orderbook items market
     * @param {string} market 
     * @param {string} askLimit 
     * @param {string} bidsLimit 
     * @returns {Promise<any | undefined>} The response
     */
    async fetchOrderBookItemsForAMarket(market, askLimit, bidsLimit) {
        try {
            const response = await this.request.get(`markets/${market}/order_book?asks_limit=${askLimit}&bids_limit=${bidsLimit}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch market ticker depth
     * @param {string} market 
     * @param {string} limit 
     * @returns {Promise<any | undefined>} The response
     */
    async fetchMarketTickerDepth(market, limit) {
        try {
            const response = await this.request.get(`markets/${market}/depth?limit=${limit}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch k line data pending trades
     * @param {string} market 
     * @param {string} limit 
     * @param {string} period 
     * @param {string} timestamp 
     * @returns {Promise<any | undefined>} The response
     */
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
