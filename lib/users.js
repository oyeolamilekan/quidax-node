const Helper = require("./helpers/error_to_string")
const request = require("./helpers/network/request")

class Users {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async create(data) {
        try {
            const response = await this.request.post('users', data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async getAllSubAccounts() {
        try {
            const response = await this.request.get('users')
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async getAccountDetails(accountId) {
        try {
            const response = await this.request.get(`users/${accountId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async editAccount(accountId, data) {
        try {
            const response = await this.request.put(`users/${accountId}`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

}

module.exports = Users