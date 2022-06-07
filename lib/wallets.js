const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Wallets {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Fetch all user wallets
     * @param {string} userId 
     * @returns {Promise<any | undefined>} 
     */
    async fetchAllWallets(userId) {
        try {
            const response = await this.request.get(`users/${userId}/wallets`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    /**
     * Fetches currency wallet.
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    async fetchCurrencyWallet(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    /**
     * Fetch payment addresses related to the wallet
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    async fetchPaymentAddresses(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}/addresses`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    /**
     * Fetch payment address for a wallet.
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    async fetchPaymentAddress(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}/address`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    /**
     * Create payment address for a customer
     * @param {string} user_id 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    async createPaymentAddress(user_id, currency) {
        try {
            const response = await this.request.post(`users/${user_id}/wallets/${currency}/addresses`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    /**
     * Fetch payment address by id.
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} addressId 
     * @returns {Promise<any | undefined>} 
     */
    async fetchPaymentAddressById(userId, currency, addressId) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}/addresses/${addressId}`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

}

module.exports = Wallets