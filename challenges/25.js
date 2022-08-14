export default function canMouseEat(dir, game) {
  let floor = game.findIndex(r => r.includes('m'))
  let pos   = game[floor].indexOf('m')

  /* IF VERSION */
  // if (dir == 'up'   ) floor  -= 1
  // if (dir == 'down' ) floor  += 1
  // if (dir == 'right') pos    += 1
  // if (dir == 'left' ) pos    -= 1
  
  /* SWTICH VERSION */
  switch (dir) {
    case 'up'    : floor -= 1 ; break
    case 'down'  : floor += 1 ; break
    case 'right' : pos   += 1 ; break
    case 'left'  : pos   -= 1 ; break
  }

  try   { return game[floor][pos] == '*' } 
  catch { return false }
} 