const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Instant order Collections", () => {
    let instantOrders;
    let instantOrder;

    it("it should fetch list of instant orders", async () => {
        try {
            const data = await quidax.instantOrder.fetchAllInstantOrders("me", "btcngn", "done", "desc")
            instantOrders = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("it should fetch an instant order", async () => {
        try {
            const data = await quidax.instantOrder.fetchInstantOrdersDetail("me", instantOrders[0].id)
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    // Create instant order
    it('it should create an instant order', async () => {
        try {
            const data = await quidax.instantOrder.createInstantOrder("me", {
                "bid": "ngn",
                "ask": "btc",
                "type": "buy",
                "total": "5",
                "unit": "ngn"
            });
            instantOrder = data.data
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    // Requote instant order
    it('it should requote a instant order', async () => {
        try {
            const data = await quidax.instantOrder.requoteInstantOrder("me", instantOrder.id);
            instantOrder = data.data
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    // Confirm instant order
    it('it should confirm an instant order', async () => {
        try {
            const data = await quidax.instantOrder.confirmInstantOrder("me", instantOrder.id);
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
})