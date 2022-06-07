# Quidax Node Library
The Quidax Node library provides an easy access to the Quidax Developer API by [Quidax](https://quidax.com).

&nbsp;

## Documentation
See the [Quidax API docs](https://docs.quidax.com/docs/overview).

&nbsp;


### **User**: The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to generate crypto currency address, collect payments and track transaction status.
&nbsp;

#### Creates sub user

```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.users.create({ 
    email: 'test@gmail.com', 
    first_name: 'test', 
    last_name: 'user' ,
    phone_number: '08012345678'
})

```

#### Fetch all sub account

```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.users.getAllSubAccounts()

```

#### Fetch user details

```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.users.getAccountDetails('<user_id>')

```

#### Edit sub account

```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.users.editAccount('<user_id>',{ 
    email: 'test@gmail.com', 
    first_name: 'test', 
    last_name: 'user' ,
    phone_number: '08012345678'
})

```


### **Markets**: Fetch market data.
&nbsp;

#### List all the markets
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.listAllMarkets()

```

#### List all market tickers
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.listMarketTickers()

```

#### Fetch a market ticker.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.fetchMarketTicker('btcngn')

```

#### Fetch orderbook items market.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.fetchOrderBookItemsForAMarket('btcngn', 5, 5)

```

#### Fetch market ticker depth.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.fetchMarketTickerDepth('btcngn', 5)

```

#### Fetch k line data pending trades.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.markets.fetchKLineDataWithPendingTradesForAMarket('btcngn', 5, 10, "<timestamp>")

```

### **Wallets**: Create wallets for user or sub-users.
&nbsp;

#### Fetch all user wallets
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.fetchAllWallets('<user_id>')

```

#### Fetches currency wallet.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.fetchCurrencyWallet('<user_id>', 'btc')

```

#### Fetch payment addresses related to the wallet
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.fetchPaymentAddresses('<user_id>', 'btc')

```


#### Fetch payment address for a wallet.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.fetchPaymentAddress('<user_id>', 'btc')

```

#### Create payment address for a customer
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.createPaymentAddress('<user_id>', 'btc')

```

#### Fetch payment address by id.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.wallets.fetchPaymentAddressById('<user_id>', 'btc', '<address_id>')

```

### **Trade**: Fetch trades of an asset.
&nbsp;

#### Fetch trades of user.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.trade.trades('<user_id>')

```

#### Fetch recent trades for a given market pair.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.trade.fetchRecentTradesForMarketPair('btcngn')

```

### **Orders**: Place trades on the orderbook.
&nbsp;

#### Fetch orders of user.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.orders.getAllOrders('me', 'btcngn', 'accepted', 'desc')

```

#### Fetch order details.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.orders.getOrderDetails('<account_id>', '<order_id>')

```

#### Create a buy or sell order.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.orders.createBuyOrSellOrder('<account_id>', 'btcngn', 'ask', 'market', '20', '50')

```

#### Cancel order.
```javascript
const Quidax = require('@quidax/src')

quidax = new Quidax(secretKey)

const quidax = quidax.orders.cancelOrder('<account_id>', '<order_id>')

```
