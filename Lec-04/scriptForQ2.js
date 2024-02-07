let prices = [250, 645, 300, 900, 50]

for(let i = 0; i < prices.length; i++){
    let newPrice = prices[i]-(prices[i]*0.1)
    prices[i] = newPrice;
}

console.log(`new prices after applying discount:[ ${prices} ]`)