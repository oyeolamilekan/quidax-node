const request = require("./helpers/network/request")
const Helper = require("./helpers/error_to_string")

class InstantOrder {
    constructor(apiKey) {
        this.secretKey = apiKey
        this.request = request(apiKey)
    }

    /**
     * Fetch all instant order created.
     * @param {string} userId 
     * @param {string} market 
     * @param {string} state 
     * @param {string} orderBy 
     * @returns {Promise<any | undefined>}
     */
    async fetchAllInstantOrders(userId, market, state, orderBy) {
        try {
            const response = await this.request.get(`users/${userId}/instant_orders?market=${market}&state=${state}&order_by=${orderBy}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Fetches all instant order
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
    async fetchInstantOrdersDetail(userId, instantOrderId) {
        try {
            const response = await this.request.get(`users/${userId}/instant_orders/${instantOrderId}`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Creates an instant order.
     * @param {string} userId 
     * @param {Object} data
     * @param {string} data.bid
     * @param {string} data.ask
     * @param {string} data.type 
     * @param {string} data.total 
     * @param {string} data.volume 
     * @param {string} data.unit 
     * @returns {Promise<any | undefined>} 
     */
    async createInstantOrder(userId, data) {
        try {
            const response = await this.request.post(`users/${userId}/instant_orders`, data)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Requotes an instant order.
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
    async requoteInstantOrder(userId, instantOrderId) {
        try {
            const response = await this.request.post(`users/${userId}/instant_orders/${instantOrderId}/requote`)
            return response.data
        } catch (error) {
            Helper.processError(error)
        }
    }

    /**
     * Confirm an instant order
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
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