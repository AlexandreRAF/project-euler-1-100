//https://en.wikipedia.org/wiki/Sieve_of_Sundaram

function nthPrime(n) {
  if (n < 1){
    return
  }

  let number = (Math.ceil((Math.log(n) / Math.log(30))**1.5 + 1.1)) * n;

  const range = Math.ceil(number / 2)
  
  const boolRemoveList = Array(n + 1).fill(false)
  
  for (let i = 1; i <= range; i++){
    //console.log("Starting iteration")
    for (let j = i; i + j + 2 * i * j <= number; j++){
      boolRemoveList[i + j + 2 * i * j] = true;
    }
  }

  const removeList = []

  let count = 0
  for (let i = 0; i < boolRemoveList.length; i++){
    if (!boolRemoveList[i]){
      count++
      if (count === n){
        return 2 * i + 1
      }
    } 
  }
}

console.log(nthPrime(10001));