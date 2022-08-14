export default function countPackages(carriers, carrierID) {
  /* SOLUTION 1*/ 
  // let list = carriers.reduce((prev, cc) => { 
  //   return prev[cc] = {
  //     ...prev, [cc[0]] : {  amount: cc[1], workers: cc[2]  } 
  //   }   
  // }, {amount: 0, workers: []})
  
  // let { amount, workers } = list[carrierID]
  
  // const getEmployees = (x) => {
  //   let amount = x.reduce((prev, cc) => {
  //     let { amount, workers } = list[cc]
  //     let children = workers ? getEmployees(workers) : 0
  //     return prev += amount + children
  //   }, 0) 
  //   return amount
  // } 
  
  // return amount + getEmployees(workers)
  
  /* SOLUTION 2 */
  const [, pack, workers] = carriers.find(([name]) => name === carrierID);
  return ( pack + workers.reduce((total, worker) => total + countPackages(carriers, worker), 0) );
  
  
  }