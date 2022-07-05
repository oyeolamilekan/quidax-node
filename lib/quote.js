const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Quotes {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Get the last price at which an asset traded.
     * @param {Object} data
     * @param {string} data.market 
     * @param {string} data.unit 
     * @param {string} data.kind 
     * @param {string} data.volume 
     * @param {string} data.total 
     * @returns {Promise<any | undefined>}
     */
    async quote(data) {
        try {
            const response = await this.request.get(`quotes?market=${data.market}&unit=${data.unit}&kind=${data.kind}&${data.volume != null ? `volume=${data.volume}` : `total=${data.total}`}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Quotes
