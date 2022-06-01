const { expect } = require('chai');
const quidax = require("./quidax_object");


describe("Trades collections", () => {
    it('Should Fetch trades', async () => {
        try {
            const data = await quidax.trade.trades("me")
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
});