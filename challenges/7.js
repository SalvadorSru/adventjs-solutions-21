export default function contains(store, product) {
  return RegExp (`"${product}"`, 'gmi').test(JSON.stringify(store))
}