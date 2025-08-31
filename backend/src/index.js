const express = require('express');
const cors = require('cors');
const {
  getHighestPrice,
  getPriceList,
} = require('./service/bitcoinExchangeService');
const app = express();
const port = 3000;

const whitelist = ['http://localhost:5173'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by Cors'));
    }
  },
};
app.use(cors(corsOptions));

app.get('/exchangeapp/highestprice/', async (req, res) => {
  let highestPriceResp = await getHighestPrice();
  res.send(highestPriceResp);
});

app.get('/exchangeapp/pricelist/', async (req, res) => {
  let priceListResp = await getPriceList();
  res.send(priceListResp);
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}/exchangeapp/highestprice/`
  );
});
