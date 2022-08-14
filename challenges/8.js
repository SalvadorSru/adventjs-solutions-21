export default function maxProfit(prices) {

  const limit = (x) => Math[x](...prices)
  const index = ( ) => prices.indexOf(limit('min'))

  if (index() == prices.length - 1) {
    prices.pop() 
    prices = prices.slice(index()) 
  }

  return limit('max') - limit('min') || -1

}