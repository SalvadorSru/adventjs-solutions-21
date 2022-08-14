export default function contarOvejas(ovejas) {
  return ovejas.filter(( item )=> {
    if (/a.*n|n.*a/i.test(item.name) && item.color == 'rojo') return item
  })
}