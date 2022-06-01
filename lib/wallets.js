const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Wallets {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async fetchAllWallets(userId) {
        try {
            const response = await this.request.get(`users/${userId}/wallets`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    async fetchCurrencyWallet(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    async fetchPaymentAddresses(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}/addresses`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    async fetchPaymentAddress(userId, currency) {
        try {
            const response = await this.request.get(`users/${userId}/wallets/${currency}/address`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

    async createPaymentAddress(user_id, currency) {
        try {
            const response = await this.request.post(`users/${user_id}/wallets/${currency}/addresses`)
            return response.data
        } catch (error) {
            Helper.processError(error);
        }
    }

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