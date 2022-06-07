const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Trade {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Fetch trades of user.
     * @param {string} accountId 
     * @returns {Promise<any | undefined>}
     */
    async trades(accountId) {
        try {
            const response = await this.request.get(`users/${accountId}/trades`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

     /**
     * Fetch recent trades for a given market pair
     * @param {string} marketPair 
     * @returns {Promise<any | undefined>}
     */
      async fetchRecentTradesForMarketPair(marketPair) {
        try {
            const response = await this.request.get(`users/trades/${marketPair}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Trade