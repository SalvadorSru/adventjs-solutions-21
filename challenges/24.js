export default function checkIsSameTree(treeA, treeB) {
  return check(treeA) === check(treeB)
}

const check = tree => {
  return [tree].reduce(( p, c ) => {  
    const _ = (x) => c[x] ? check(c[x]) : 0
    return p + c.value + _('left') + _('right')
  }, 0);
}