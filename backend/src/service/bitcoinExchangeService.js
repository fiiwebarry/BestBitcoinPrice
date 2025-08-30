const fetch = require("node-fetch");

async function getBlockchainUSDPrice() {
  let response = await fetch("https://blockchain.info/ticker");
  if (response.ok) {
    response = await response.json();
  } else {
    throw new Error(`Error fetching https://blockchain.info/ticker`);
  }

  return { sellPrice: response["USD"]?.sell };
}

async function getExmoUSDPrice() {
  let response = await fetch("https://api.exmo.com/v1/ticker");

  if (response.ok) {
    response = await response.json();
  } else {
    throw new Error(`Error fetching https://blockchain.info/ticker`);
  }

  return { sellPrice: response["BTC_USD"]?.sell_price };
}

async function getPriceList() {
  let [blockchainUSDPrice, exmoUSDPrice] = await Promise.all([
    getBlockchainUSDPrice(),
    getExmoUSDPrice(),
  ]);
  return [
    { ...blockchainUSDPrice, name: "Blockchain" },
    { ...exmoUSDPrice, name: "Exmo" },
  ];
}

async function getHighestPrice() {
  let [blockchainUSDPrice, exmoUSDPrice] = await Promise.all([
    getBlockchainUSDPrice(),
    getExmoUSDPrice(),
  ]);

  let highestPriceResponse;
  if (blockchainUSDPrice?.sellPrice && exmoUSDPrice?.sellPrice) {
    highestPriceResponse =
      blockchainUSDPrice.sellPrice > exmoUSDPrice.sellPrice
        ? { apiName: "Blockchain", price: blockchainUSDPrice.sellPrice }
        : { apiName: "Exmo", price: exmoUSDPrice.sellPrice };
  } else {
    throw new Error("USD Currency could not be found");
  }

  return highestPriceResponse;
}

module.exports.getHighestPrice = getHighestPrice;
module.exports.getPriceList = getPriceList;
