export default function shouldBuyFidelity(times) {

  let price = 0;
  
  for (let i = 1; i < times; i++) {
    price += 12 * 0.75**i
  }

  return 250 + price < 12 * times

}