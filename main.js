function keepOrder(ary, val) {

  let lowestIndex = 0

  for (let i = 0; val > ary[i]; i++) {
    lowestIndex = i + 1
  }

  return lowestIndex

}

// function arrChecker(e, i) {
//   if (val <= i) {
//     return
//   }
// }

console.log(keepOrder([1, 2, 3, 4, 7], 0))
  
  // parameter: sorted array, value to insert
  // return: lowest index where the value can be inserteand maintain the array's sort
  // e.g. keepOrder({[1, 3, 4, 4, 9], 6})
  // results in index 4
  