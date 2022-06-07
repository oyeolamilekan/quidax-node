const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class Orders {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Fetch orders of user.
     * @param {string} accountId 
     * @param {string} market 
     * @param {string} state 
     * @param {string} orderBy 
     * @returns {Promise<any | undefined>}
     */
    async getAllOrders(accountId, market, state, orderBy) {
        try {
            const response = await this.request.get(`users/${accountId}/orders?market=${market}&state=${state}&order_by=${orderBy}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetch order details.
     * @param {string} accountId 
     * @param {string} orderId 
     * @returns {Promise<any | undefined>}
     */
    async getOrderDetails(accountId, orderId) {
        try {
            const response = await this.request.get(`users/${accountId}/orders/${orderId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }
    
    /**
     * Create a buy or sell order.
     * @param {string} userId 
     * @param {string} market 
     * @param {string} side 
     * @param {string} ord_type 
     * @param {string} price 
     * @param {string} volume 
     * @returns {Promise<any | undefined>}
     */
    async createBuyOrSellOrder(userId, market, side, ord_type, price, volume) {
        try {
            const data = { market, side, ord_type, price, volume }
            const response = await this.request.post(`users/${userId}/orders`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Cancel order.
     * @param {string} accountId 
     * @param {string} orderId 
     * @returns {Promise<any | undefined>}
     */
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
