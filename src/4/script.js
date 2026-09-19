function isPalindrome(number){
    return number === Number(String(number).split("").reverse().join(""));
}

function largestPalindromeProduct(n) {
    for (let i = Number("9".repeat(n)); i >= 1; i--){
        for (let j = i; j >= 1; j--){
            if (isPalindrome(i * j)){
                return i * j;
            }
        }
    }
}

console.log(largestPalindromeProduct(3));
