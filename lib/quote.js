const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Quotes {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Quote an order.
     * @param {string} market 
     * @param {string} unit 
     * @param {string} kind 
     * @param {string} volume 
     * @returns {Promise<any | undefined>}
     */
    async quote(market, unit, kind, volume) {
        try {
            const response = await this.request.get(`quotes?market=${market}&unit=${unit}&kind=${kind}&volume=${volume}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Quotes
