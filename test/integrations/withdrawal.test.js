const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Withdrawal Collections", () => {
    let withdrawals;
    let withdrawalObject;

    it("it should fetch list of withdrawal", async () => {
        try {
            const data = await quidax.withdrawal.fetchWithdrawals("me", "ltc", "done");
            withdrawals = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("it should fetch a withdrawal", async () => {
        try {
            const data = await quidax.withdrawal.fetchWithdrawal("me", withdrawals[0].id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("it should create a withdrawal", async () => {
        try {
            const data = await quidax.withdrawal.createWithdrawal("me", {
                "currency": "trx",
                "amount": "1",
                "transaction_note": "Thank God",
                "narration": "We love you.",
                "fund_uid": "TXC1D6zcFJ7vpyg1W5C64cEL4WmCvUaH4j"
            });
            withdrawalObject = data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("it should cancel a withdrawal", async () => {
        try {
            const data = await quidax.withdrawal.cancelWithdrawal("me", withdrawalObject.data.id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
})