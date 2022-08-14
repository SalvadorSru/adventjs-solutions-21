export default function createXmasTree(height) {

  let base = '*'.repeat( height * 2 - 1 )
  let tree = base, new_level = base

  for (let level of Array(height - 1)) {
    new_level = new_level.replace( /\*(\**)\*/g , '_$1_')
    tree = new_level + '\n' + tree
  }

  let log = new_level.replace('*', '#') 

  return `${tree}\n${log}\n${log}`

}