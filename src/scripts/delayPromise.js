function delay(delay) {
  return new Promise(resove => {
    setTimeout(() => {
      resove(delay)
    }, delay)
  })
}

// Promise.all([delay(2000), delay(1000)]).then((res) => {
//     let [val, rest] = res;
//     console.log({ val, rest })
// })