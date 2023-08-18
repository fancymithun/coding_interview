var SumOfTwoIntegers = (a,b) => {
    while(b != 0){
        const [sum,carry] = [a ^ b,((a & b) << 1)]
        a = sum
        b = carry
    }

    return a
}

let result = SumOfTwoIntegers(101,28)
console.log(result);