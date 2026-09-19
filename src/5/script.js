function isPalindrome(number){
    return number === Number(String(number).split("").reverse().join(""));
}

function largestPalindromeProduct(n) {
    for (let i = Number("9".repeat(n)); i >= 1; i--){
        //Made an approximation to reduce the number of iterations: j > i * Math.min((String(j).length -1) * 0.25, 0.95
        for (let j = i; String(j).length === n && j > i * Math.min(String(j).length * 0.25, 0.95); j--){
            if (isPalindrome(i * j)){
                return i * j;
            }
        }
    }
}

console.log(largestPalindromeProduct(3));

