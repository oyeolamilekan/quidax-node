const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Orders {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    async getAllOrders(accountId, market, state, orderBy) {
        try {
            const response = await this.request.get(`users/${accountId}/orders?market=${market}&state=${state}&order_by=${orderBy}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async getOrderDetails(accountId, orderId) {
        try {
            const response = await this.request.get(`users/${accountId}/orders/${orderId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async createBuyOrSellOrder(userId, market, side, ord_type, price, volume) {
        try {
            const data = { market, side, ord_type, price, volume }
            const response = await this.request.post(`users/${userId}/orders`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    async cancelOrder(accountId, orderId) {
        try {
            const response = await this.request.post(`users/${accountId}/orders/${orderId}/cancel`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

}

module.exports = Orders
