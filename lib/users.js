const Helper = require("./helpers/error_to_string")
const request = require("./helpers/network/request")

class Users {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Creates sub user
     * @param {Object} data 
     * @param {string} data.email
     * @param {string} data.first_name
     * @param {string} data.last_name
     * @param {string} data.phone_number
     * @returns {Promise<any | undefined>} 
     */
    async create(data) {
        try {
            const response = await this.request.post('users', data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch all sub account
     * @returns {Promise<any | undefined>} 
     */
    async getAllSubAccounts() {
        try {
            const response = await this.request.get('users')
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch user details
     * @param {string} accountId 
     * @returns {Promise<any | undefined>} 
     */
    async getAccountDetails(accountId) {
        try {
            const response = await this.request.get(`users/${accountId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Edit sub account
     * @param {string} accountId 
     * @param {Object} data
     * @param {string} data.email
     * @param {string} data.first_name
     * @param {string} data.last_name
     * @param {string} data.phone_number
     * @returns 
     */
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