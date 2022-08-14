export default function pangram(letter) {
  
  return [...letter].reduce((p, c) => {
    if (!p.includes(c) && /\p{L}/gmiu.test(c)) p.push(c)
    return p
  }, []).length > 26

}