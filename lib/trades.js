const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Trade {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async trades(accountId) {
        try {
            const response = await this.request.get(`users/${accountId}/trades`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Trade