export default function canReconfigure(src, to) {
  
  if (src.length !== to.length) return false

  const D = {}

  for ( let i = 0; i < src.length; i++ ) {

   if ((  D[ src[i] ]  &&  D[ src[i] ] != to[i]  ) 
      ||  D[ to[i]  ]  &&  D[ to[i]  ] != src[i] ) return false

   D[src[i]] = to[i] ; D[to[i]] = src[i]

  }

  return true
}