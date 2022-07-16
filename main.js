function num (num1, num2){
    console.log(Math.min(num1, num2))
}
let numbers = {
    num1: prompt('число'),
    num2: prompt('число'),
}

num(numbers.num1, numbers.num2)


function countChar () {
    let one = prompt("слово")
    console.log(one.length)
}
countChar()