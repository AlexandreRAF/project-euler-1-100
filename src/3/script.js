//First tried implementing Sieve of Sundaram algoritm [https://en.wikipedia.org/wiki/Sieve_of_Sundaram], but it got too heavy for large numbers.

//Ended up implementing the algorithm shown on https://stackoverflow.com/questions/23287/algorithm-to-find-largest-prime-factor-of-a-number

function largestPrimeFactor(number) {

    const factorArray = [];
    let d = 2;
    let n = number;

    while (n > 1){
        while (n % d === 0){
            factorArray.push(d);
            n /= d;
        }
        d++;
    }

    return Math.max(...factorArray);
}

console.log(largestPrimeFactor(600851475143));
