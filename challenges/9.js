export default function groupBy(collection, it) {

  let output = {}

  for (let item of collection) {
    let param = typeof it === 'function' ? it(item) : item[it] 
    output[param] = [...output[param] || [], item] 
  }
  
  return output
}