const InstantOrder = require("./instantOrder");
const Users = require("./users");
const Orders = require("./orders");
const Wallets = require("./wallets");
const Quotes = require("./quote");
const Trade = require("./trades");
const Markets = require("./markets");
const Deposits = require("./deposits");
const EmptyKeyError = require("./helpers/errors/emptyKeyError");
const Withdrawal = require("./withdrawals");
class Quidax {
    constructor(apiKey) {
        this.secretKey = apiKey
        if (!this.secretKey) throw new EmptyKeyError({ message: "Uninitiated api key", status: 403 });
        this.users = new Users(this.secretKey)
        this.wallets = new Wallets(this.secretKey)
        this.instantOrder = new InstantOrder(this.secretKey)
        this.orders = new Orders(this.secretKey)
        this.quotes = new Quotes(this.secretKey)
        this.trade = new Trade(this.secretKey)
        this.markets = new Markets(this.secretKey)
        this.deposit = new Deposits(this.secretKey)
        this.withdrawal = new Withdrawal(this.secretKey)
    }
}

module.exports = Quidax