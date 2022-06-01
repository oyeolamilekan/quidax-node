const { expect } = require('chai');
const quidax = require("./quidax_object");

describe('All module objects are callable', function () {

    [
        quidax.deposit,
        quidax.markets,
        quidax.trade,
        quidax.quotes,
        quidax.orders,
        quidax.instantOrder,
        quidax.users,
        quidax.withdrawal,
        quidax.wallets].map(f => {
            it(f.constructor.name, function () {
                expect(typeof f).to.equal('object')
            })

        })
})