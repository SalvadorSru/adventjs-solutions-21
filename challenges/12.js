export default function getMinJump(obstacles) {

  let max = Math.max(...obstacles) + 2
  let road = new String
  
  for (let point = 1; point < max; point++) {
    road += obstacles.includes(point) ? 'X' : '.'
  }

  for (let cycle = 0; cycle < max; cycle++) {
    
    let jump = new RegExp(`.{${cycle}}`, 'gmi')

    let checker = road.match(jump).map((to => {
      return to.at(-1) == '.' ? true : false
    }))

    if (!checker.includes(false)) return cycle
    
  }
  
}