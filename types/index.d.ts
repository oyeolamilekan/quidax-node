import { AxiosInstance } from "axios";

export type Currency = 'USD' | 'NGN';

declare class Quidax {
    public secretKey: string;

    constructor(secretKey: string)

    public users = new Users(
        this.secretKey
    );

    public wallets = new Wallets (
        this.secretKey
    );

    public instantOrder = new InstantOrder(
        this.secretKey
    );

    public orders = new Orders (
        this.secretKey
    );

    public quotes = new Quotes(
        this.secretKey
    );

    public markets = new Markets(
        this.secretKey
    );

    public deposit = new Deposits(
        this.secretKey
    );

    public withdrawal = new Withdrawal(
        this.secretKey
    );

}

declare class Users {

    constructor(secretKey: string)

    /**
     * Create user
     * @returns {Promise<any | undefined>} 
     */
    create(data: any): Promise<any | undefined>

    /**
     * Fetch all sub account
     * @returns {Promise<any | undefined>}
     */
    getAllSubAccounts(): Promise<any | undefined>

    /**
     * Fetch user details
     * @param {string} accountId 
     * @returns {Promise<any | undefined>} 
     */
    getAccountDetails(accountId: string): Promise<any | undefined>

    /**
     * Edit sub account
     * @param {string} accountId 
     * @param {Object} data
     * @param {string} data.email
     * @param {string} data.first_name
     * @param {string} data.last_name
     * @param {string} data.phone_number
     * @returns {Promise<any | undefined>} 
     * */
    editAccount(accountId: string, data: any): Promise<any | undefined>
}

declare class Wallets {

    constructor(apiKey: string)

    /**
     * Fetch all user wallets
     * @param {string} userId 
     * @returns {Promise<any | undefined>} 
     */
    fetchAllWallets(userId: string): Promise<any | undefined>

    /**
     * Fetches currency wallet.
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    fetchCurrencyWallet(userId: string, currency: string): Promise<any | undefined>

    /**
     * Fetch payment addresses related to the wallet
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    fetchPaymentAddresses(userId: string, currency: string): Promise<any | undefined>

    /**
     * Fetch payment address for a wallet.
     * @param {string} userId 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    fetchPaymentAddress(userId: string, currency: string): Promise<any | undefined>

    /**
     * Create payment address for a customer
     * @param {string} user_id 
     * @param {string} currency 
     * @returns {Promise<any | undefined>} 
     */
    createPaymentAddress(user_id: string, currency: string): Promise<any | undefined>

    /**
     * Fetch payment address by id.
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} addressId 
     * @returns {Promise<any | undefined>} 
     */
    fetchPaymentAddressById(userId: string, currency: string, addressId: string): Promise<any | undefined>
}

declare class InstantOrder { 
    constructor(apiKey: string)

    /**
     * Fetch all instant order created.
     * @param {string} userId 
     * @param {string} market 
     * @param {string} state 
     * @param {string} orderBy 
     * @returns {Promise<any | undefined>}
     */
    fetchAllInstantOrders(userId: string, market: string, state: string, orderBy: string): Promise<any | undefined>

    /**
     * Fetches all instant order
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
    fetchInstantOrdersDetail(userId: string, instantOrderId: string): Promise<any | undefined>

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
     createInstantOrder(userId: string, any: any): Promise<any | undefined>

     /**
     * Requotes an instant order.
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
    requoteInstantOrder(userId: string, instantOrderId: string): Promise<any | undefined>

    /**
     * Confirm an instant order
     * @param {string} userId 
     * @param {string} instantOrderId 
     * @returns {Promise<any | undefined>}
     */
     confirmInstantOrder(userId: string, instantOrderId: string): Promise<any | undefined>
}

declare class Orders {

    constructor(apiKey: string)

    /**
     * Fetch orders of user.
     * @param {string} accountId 
     * @param {string} market 
     * @param {string} state 
     * @param {strcreateBuyOrSellOrdering} orderBy 
     * @returns {Promise<any | undefined>}
     */
    getAllOrders(accountId: string, market: string, state: string, orderBy: string): Promise<any | undefined>

    /**
     * Fetch order details.
     * @param {string} accountId 
     * @param {string} orderId 
     * @returns {Promise<any | undefined>}
     */
    getOrderDetails(accountId: string, orderId: string): Promise<any | undefined>

    /**
     * Create a buy or sell order.
     * @param {string} userId 
     * @param {Object} data 
     * @param {string} data.market 
     * @param {string} data.side 
     * @param {string} data.ord_type 
     * @param {string} data.price 
     * @param {string} data.volume 
     * @returns {Promise<any | undefined>}
     */
    createBuyOrSellOrder(userId: string, data: any): Promise<any | undefined>

    /**
     * Cancel order.
     * @param {string} accountId 
     * @param {string} orderId 
     * @returns {Promise<any | undefined>}
     */
    cancelOrder(accountId: string, orderId: string): Promise<any | undefined>

}

declare class Quotes {

    constructor(apiKey: string)

    /**
     * Get the last price at which an asset traded.
     * @param {Object} data
     * @param {string} data.market 
     * @param {string} data.unit 
     * @param {string} data.kind 
     * @param {string} data.volume 
     * @param {string} data.total 
     * @returns {Promise<any | undefined>}
     */
    quote(data: any): Promise<any | undefined>
}

declare class Trade {

    constructor(apiKey: string)

    /**
     * Fetch trades of user.
     * @param {string} accountId 
     * @returns {Promise<any | undefined>}
     */
    trades(accountId: string): Promise<any | undefined>

    /**
    * Fetch recent trades for a given market pair
    * @param {string} marketPair 
    * @returns {Promise<any | undefined>}
    */
    fetchRecentTradesForMarketPair(marketPair: string): Promise<any | undefined>
}

declare class Markets {

    constructor(apiKey: string)

    /**
     * List all the markets
     * @returns {Promise<any | undefined>} The response
     */
    listAllMarkets(): Promise<any | undefined>

    /**
     * List all market tickers
     * @returns {Promise<any | undefined>} The response
     */
    listMarketTickers(): Promise<any | undefined>

    /**
     * Fetch a market ticker.
     * @param {string} market 
     * @returns {Promise<any | undefined>} The response
     */
    fetchMarketTicker(market: string): Promise<any | undefined>

    /**
     * Fetch orderbook items market
     * @param {string} market 
     * @param {string} askLimit 
     * @param {string} bidsLimit 
     * @returns {Promise<any | undefined>} The response
     */
    fetchOrderBookItemsForAMarket(market: string, askLimit: string, bidsLimit: string): Promise<any | undefined>

    /**
    * Fetch market ticker depth
    * @param {string} market 
    * @param {string} limit 
    * @returns {Promise<any | undefined>} The response
    */
    fetchMarketTickerDepth(market: string, limit: string): Promise<any | undefined>

    /**
     * Fetch k line data pending trades
     * @param {string} market 
     * @param {string} limit 
     * @param {string} period 
     * @param {string} timestamp 
     * @returns {Promise<any | undefined>} The response
     */
    fetchKLineDataWithPendingTradesForAMarket(market: string, limit: string, period: string, timestamp: string): Promise<any | undefined>
}

declare class Deposits {

    constructor(apiKey: string)

     /**
     * Fetches all deposits
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} state 
     * @returns {Promise<any | undefined>} The response
     */
    fetchAllDeposit(userId: string, currency: string, state: string): Promise<any | undefined>

     /**
     * Fetches a deposit
     * @param {string} userId 
     * @param {string} despositId 
     * @returns {Promise<any | undefined>} The response
     */
    fetchDeposit(userId: string, despositId: string): Promise<any | undefined>
}

declare class Withdrawal {

    constructor(apiKey: string)

    /**
     * Creates a withdrawal
     * @param {string} userId 
     * @param {Object} data 
     * @param {string} data.currency
     * @param {string} data.amount 
     * @param {string} data.transaction_note 
     * @param {string} data.narration 
     * @param {string} data.fund_uid 
     * @param {string} data.fund_uid2 
     * @returns {Promise<any | undefined>} 
     */
    createWithdrawal(userId: string, data: any): Promise<any | undefined>

    /**
     * Cancels a withdrawal request.
     * @param {string} userId 
     * @param {string} withdrawId 
     * @returns {Promise<any | undefined>} 
     */
    cancelWithdrawal(userId: string, withdrawId: string): Promise<any | undefined>

    /**
     * Fetchs withdrawal detail
     * @param {string} userId 
     * @param {string} withdrawId 
     * @returns {Promise<any | undefined>} 
     */
    fetchWithdrawal(userId: string, withdrawId: string): Promise<any | undefined>

    /**
     * Fetchs all withdrawal related to the currency.
     * @param {string} userId 
     * @param {string} currency 
     * @param {string} state 
     * @returns {Promise<any | undefined>} 
     */
    fetchWithdrawals(userId: string, currency: string, state: string): Promise<any | undefined>
}

export default Quidax