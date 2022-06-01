const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Wallets Collections", () => {
    let wallets;
    
    it('Should Fetch addresses', async () => {
        try {
            const data = await quidax.wallets.fetchAllWallets("me");
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should Fetch a single wallet address by currency type', async () => {
        try {
            const data = await quidax.wallets.fetchCurrencyWallet("me", "btc");
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should Fetch a payment addresses related to a currency.', async () => {
        try {
            const data = await quidax.wallets.fetchPaymentAddresses("me", "eth");
            wallets = data.data;
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('array')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should Fetch a wallet address by currency type', async () => {
        try {
            const data = await quidax.wallets.fetchPaymentAddress("me", "trx");
            expect(data).to.be.an('object')
            expect(data.data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should create a payment address.', async () => {
        try {
            const data = await quidax.wallets.createPaymentAddress("me", "btc");
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it('Should fetch a wallet adddress.', async () => {
        try {
            const data = await quidax.wallets.fetchPaymentAddressById("me", "eth", wallets[0].id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
})