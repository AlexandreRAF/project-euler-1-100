function multiplesOf3Or5(number) {
  const multiples = [];
  for (let i = 1; i < number; i++){
    if (i % 3 === 0 || i % 5 === 0){
      multiples.push(i);
    }
  }
  return multiples.reduce((a, b) => a + b);
}

console.log(multiplesOf3Or5(19564));
