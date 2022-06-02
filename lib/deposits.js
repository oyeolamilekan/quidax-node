const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Deposits {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Fetches all deposits
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} state 
     * @returns {Promise<any | undefined>} The response
     */
    async fetchAllDeposit(userId, currency, state) {
        try {
            const response = await this.request.get(`users/${userId}/deposits?currency=${currency}&state=${state}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetches a deposit
     * @param {string} userId 
     * @param {string} despositId 
     * @returns {Promise<any | undefined>} The response
     */
    async fetchDeposit(userId, despositId) {
        try {
            const response = await this.request.get(`users/${userId}/deposits/${despositId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Deposits
