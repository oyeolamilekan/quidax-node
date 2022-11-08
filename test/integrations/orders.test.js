const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Order Collections", () => {
    let orders;
    let order;

    it('Should Fetch all orders', async () => {
        try {
            const data = await quidax.orders.getAllOrders("me", "btcngn", "done", "desc");
            orders = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should Fetch an order detail', async () => {
        try {
            const data = await quidax.orders.getOrderDetails("me", orders[0].id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should create buy or sell order', async () => {
        try {
            const payload = {
                market: "btcngn",
                side: "buy",
                ord_type: "limit",
                price: "1",
                volume: "0.1"
            }
            const data = await quidax.orders.createBuyOrSellOrder("me", payload);
            order = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should cancel an order', async () => {
        try {
            const data = await quidax.orders.cancelOrder("me", order.id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

})