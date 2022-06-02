const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Withdrawal {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Creates a withdrawal
     * @param {string} userId 
     * @param {Object} data 
     * @param {string} data.currency
     * @param {string} data.amount 
     * @param {string} data.transaction_note 
     * @param {string} data.narration 
     * @param {string} data.fund_uid 
     * @param {string} data.fund_uid2 
     * @returns {Promise<any | undefined>} 
     */
    async createWithdrawal(userId, data) {
        try {
            const response = await this.request.post(`users/${userId}/withdraws/`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Cancels a withdrawal request.
     * @param {string} userId 
     * @param {string} withdrawId 
     * @returns {Promise<any | undefined>} 
     */
    async cancelWithdrawal(userId, withdrawId) {
        try {
            const response = await this.request.post(`users/${userId}/withdraws/${withdrawId}/cancel`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }


    /**
     * Fetchs withdrawal detail
     * @param {string} userId 
     * @param {string} withdrawId 
     * @returns {Promise<any | undefined>} 
     */
    async fetchWithdrawal(userId, withdrawId) {
        try {
            const response = await this.request.get(`users/${userId}/withdraws/${withdrawId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }


    /**
     * Fetchs all withdrawal related to the currency.
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} state 
     * @returns {Promise<any | undefined>} 
     */
    async fetchWithdrawals(userId, currency, state) {
        try {
            const response = await this.request.get(`users/${userId}/withdraws?currency=${currency}&state=${state}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = Withdrawal
