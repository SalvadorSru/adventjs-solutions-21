export default function sumPairs(numbers, result) {
   
  for   ( let [ x_i, x ] of numbers.entries()) {
    for ( let [ y_i, y ] of numbers.entries()) { 
      if ( result == (x_i != y_i && x + y) ) return [x, y]
    }
  } 

  return null
}