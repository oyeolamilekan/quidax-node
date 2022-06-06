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

&nbsp;


### **Markets**: The Market API allows authenticated users to fetch market-related data such as tickers, k-line (HLOC) data, order book items, and market depth.
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