export default function canCarry(capacity, trip) {
 
  /* SOLUTION 1 */
  
  // let gifts = 0
  // for (let i in [...trip]) { i = Number(i) 
  //   let [n, , y] = trip[i], [, n_x, ] = trip[i + 1] || []
  //   gifts += n  ;  if (y <= n_x) gifts -= n    
  // }

  // return gifts <= capacity

  /* SOLUTION 2 */

  for  (let i = 0; i < trip.length; i++ ) { 
    let [n, , y] = trip[i], [, n_x, ] = trip[i + 1] || []
    capacity -= n  ;  if  ( y <= n_x && ( capacity +=n ) < 0 ) return false
  }

  return 0 <= capacity
  
}