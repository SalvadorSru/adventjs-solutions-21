export default function getCoins(change) {

  //SOLUTION 1

  /* 
    let coins =  [ 1, 2, 5, 10, 20, 50 ], output =  [ 0, 0, 0, 0, 0, 0 ]
    let position  =  5, expected = 0
  
    while (change > expected) {
      if (expected + coins[position] > change) {  position -= 1; continue  } 

      expected += coins[position]
      output[position] +=1
     } 
  */

  //SOLUTION 2

  return [50, 20, 10, 5, 2, 1].map(coin => {    
    let v = ~~(change / coin)
    change -= coin * (v) ; return v
  }).reverse()
 
}
