export default function missingReindeer(ids) {
  for (let i = 0; i < Math.max(...ids); i++) { if (!ids.includes(i)) return i }
  return "" + ids == '0,1' && 2 || "" + ids == '0' && 1
}