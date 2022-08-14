export default function listGifts(letter) {
  let list =  letter.split(/\s+/i)
  let group = {}

  list.forEach((item)=> {
    if(!item.includes('_') && item != '') group[item] = (group[item] ??= 0) + 1
  })

  return group
}