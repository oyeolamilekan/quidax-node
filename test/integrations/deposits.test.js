const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Deposits Collections", () => {
    let deposit;

    it("it should fetch list of desposit", async () => {
        try {
            const data = await quidax.deposit.fetchAllDeposit("me", "ltc", "accepted");
            deposit = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("it should fetch a desposit", async () => {
        try {
            const data = await quidax.deposit.fetchDeposit("me", deposit[0].id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

})