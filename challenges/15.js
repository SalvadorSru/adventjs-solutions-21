export default function checkSledJump(heights) {
  let max = Math.max(...heights)
  let state = true, check = true;

  for (let [i, n] of heights.entries()) {
    check = state ? n < heights[i + 1] : n < heights[i - 1]
    if (n == max) { state = false, check = true }  
    check = check && n != heights[i + 1]  && max != heights[heights.length - 1]
    if (check == false) break; 
  }   

  return check
  
}