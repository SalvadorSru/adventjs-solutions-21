export default function countDecorations(bigTree) {

  /* SOLUTION 1 */

  // return JSON.stringify(bigTree)
  //                 .match(/[0-9]+/gmi)
  //                 .reduce((a, b) => a + Number(b), 0)
 
  
  /* SOLUTION 2 */

  let { value, left, right } = bigTree

  return value
         + ( right ? countDecorations(right) : 0 )
         + ( left  ? countDecorations(left)  : 0 )

}
