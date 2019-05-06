var ccxt = require('ccxt');

(async () => {
  const exchanges = ['bittrex', 'binance'];

  const symbol = 'BTC/USD';
  const tickers = {};

  await Promise.all(
    exchanges.map(
      exchangeId =>
        new Promise(async (resolve, reject) => {
          const exchange = new ccxt[exchangeId]({ enableRateLimit: true });

          while (true) {
            const ticker = await exchange.fetchTicker(symbol);
            tickers[exchangeId] = ticker;

            Object.keys(tickers).map(exchangeId => {
              const ticker = tickers[exchangeId];
              console.log(
                ticker['datetime'],
                exchangeId,
                ticker['bid'],
                ticker['ask']
              );
            });
          }
        })
    )
  );
})();
