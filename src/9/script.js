function specialPythagoreanTriplet(n) {
  const limit = n;

  for (let a = 1; a <= limit; a++){
    for (let b = a + 1; b <= limit && b > a; b++){
      for (let c = b + 1; c <= limit && c > b; c++){
        let sumOfabc = a + b + c;
        if (sumOfabc > limit){
          break
        } else if (a**2 + b**2 === c**2 && sumOfabc === n){
          return a*b*c;
        }
      }
    }
  }
}

console.log(specialPythagoreanTriplet(1000));