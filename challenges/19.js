export default function learn(time, courses) {

  let out = null;
  let max = 0;
  
  for (let [x_i, x] of courses.entries()) {
    for (let [y_i, y] of courses.entries()) {
      
      let sum = x + y
  
      if (x_i != y_i) {
        if (sum == time ) return [x_i, y_i]
        if (sum < time && sum > max) { max = sum ; out = [x_i, y_i] }
      }
  
    }
  }
  
  return out
  }