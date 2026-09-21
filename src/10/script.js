// https://en.wikipedia.org/wiki/Sieve_of_Sundaram

function primeSummation(n) {
  if (n < 3){ return; }

  const bN = n-1; // Primes below n
  const range = Math.ceil((bN-2) / 2); // Gives all primes except 2 below 2n + 2

  let boolArr = Array(range + 1).fill(false);
  
  for (let i = 1; i <= range; i++){
    for (let j = i; i + j + 2 * i * j < n; j++){
      boolArr[i + j + 2 * i * j] = true;
    }
  }

  // Callback function for calculating the primes from the filtered array
  function getPrime(currIndex, currValue){
    if (!currValue){
      return 2 * currIndex + 1;
    }
    return 0;
  }

  const sum = boolArr.reduce((accum, value, index) => accum + getPrime(index, value)) + 2;
  // Sums 2 because the algorithm does not include the prime 2

  return sum;
}

console.log(primeSummation(2000000));