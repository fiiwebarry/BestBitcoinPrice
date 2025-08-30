const express = require("express");
const {
  getHighestPrice,
  getPriceList,
} = require("./service/bitcoinExchangeService");
const app = express();
const port = 3000;

app.get("/exchangeapp/highestprice/", async (req, res) => {
  let highestPriceResp = await getHighestPrice();
  res.send(highestPriceResp);
});

app.get("/exchangeapp/pricelist/", async (req, res) => {
  let priceListResp = await getPriceList();
  res.send(priceListResp);
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}/exchangeapp/highestprice/`
  );
});
