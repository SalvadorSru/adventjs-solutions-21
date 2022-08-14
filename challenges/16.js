export default function decodeNumber(symbols) {
  
  let ope = '', s = {'.': 1,  ',': 5, ':': 10,  ';': 50,  '!': 100  };

  [...symbols].forEach((g, i, a) => { 
    let cc = s[g] ? s[g] : NaN
    ope += s[g] < s[a[i + 1]] ? `-${cc}` : `+${cc}`
  })
  
  return eval(ope)
  
}