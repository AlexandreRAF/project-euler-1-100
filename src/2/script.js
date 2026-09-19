function fiboEvenSum(n) {
    let lastNum = 1
    let currNum = 2

    const evenFiboNumbers = []
    for (let i = 0; currNum <= n; i++){
        if (currNum % 2 === 0){
            evenFiboNumbers.push(currNum);
        }

        const sum = lastNum + currNum;
        lastNum = currNum;
        currNum = sum;
    }

    return evenFiboNumbers.reduce((a, b) => a + b);
}

console.log(fiboEvenSum(1000))
