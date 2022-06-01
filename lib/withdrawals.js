const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Withdrawal {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async createWithdrawal(userId, data) {
        try {
            const response = await this.request.post(`users/${userId}/withdraws/`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async cancelWithdrawal(userId, withdrawId) {
        try {
            const response = await this.request.post(`users/${userId}/withdraws/${withdrawId}/cancel`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }


    async fetchWithdrawal(userId, withdrawId) {
        try {
            const response = await this.request.get(`users/${userId}/withdraws/${withdrawId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }


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
