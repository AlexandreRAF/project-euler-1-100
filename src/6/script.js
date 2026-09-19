function sumSquareDifference(n) {
  const sequence = Array(n).fill(0).map((_,b) => b + 1);
  const squaredSum = sequence.map((a) => a**2).reduce((a, b) => a + b);
  const sumSquared = sequence.reduce((a, b) => a + b)**2

  return sumSquared - squaredSum;
}

console.log(sumSquareDifference(100));