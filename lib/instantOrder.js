const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class InstantOrder {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async fetchAllInstantOrders(userId, market, state, orderBy) {
        try {
            const response = await this.request.get(`users/${userId}/instant_orders?market=${market}&state=${state}&order_by=${orderBy}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async fetchInstantOrdersDetail(userId, instantOrderId) {
        try {
            const response = await this.request.get(`users/${userId}/instant_orders/${instantOrderId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async createInstantOrder(userId, data) {
        try {
            const response = await this.request.post(`users/${userId}/instant_orders`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async requoteInstantOrder(userId, instantOrderId) {
        try {
            const response = await this.request.post(`users/${userId}/instant_orders/${instantOrderId}/requote`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async confirmInstantOrder(userId, instantOrderId) {
        try {
            const response = await this.request.post(`users/${userId}/instant_orders/${instantOrderId}/confirm`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
}

module.exports = InstantOrder