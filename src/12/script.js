//Implemented the algorithm that gets all factors from:
//https://www.geeksforgeeks.org/dsa/find-all-factors-of-a-natural-number/

function getDivisors(n) {
  let res = [];
  let num = 1;

  while (num ** 2 <= n) {
    if (n % num === 0) {
      if (num === n / num) {
        res.push(num);
      } else {
        res.push(num);
        res.push(n / num);
      }
    }
    num++;
  }

  return res.length;
}

function divisibleTriangleNumber(n) {
  let currTriangle = 1;
  let currNum = 1;
  while (true){
    currNum++
    currTriangle += currNum;
    if (getDivisors(currTriangle) > n){
      return currTriangle;
    }  
  }

}

console.log(divisibleTriangleNumber(500));