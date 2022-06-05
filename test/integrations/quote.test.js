const { expect } = require('chai');
const quidax = require("./quidax_object");


describe("Quotes Collection", () => {
    it("list all markets", async () => {
        try {
            const data = await quidax.quotes.quote({
                "market": "btcngn",
                "unit": "ngn",
                "kind": "ask",
                "total": "200000"
            })
            markets = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
})