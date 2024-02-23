// 1)

let number = prompt('введите число');
if (number % 2 == 0) {
    console.log('число четное')
} else {
    console.log('число нечетное')
}

// 2)

let numb = prompt('введите число');
if (numb > 0) {
    console.log('число положительное')
} else if (numb < 0) {
    console.log('число отрицательное')
} else {
    console.log('число равно нулю')
}

// 4)

let num = prompt('введите число');
if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else {
    alert('0');
}

// 5)

let question = prompt('Введите арифметический оператор ( +, -, *, %)');
let c = 5;
let d = 2;
switch (question) {
    case '+':
        console.log('7');
        break;

    case '-':
        console.log('3');
        break;

    case '*':
        console.log('10');
        break;

    default:
        console.log('2.5');
        break;
}

// 6)

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }


let a = 2;
let b = 1.5;
result = a + b < 4 ? 'Мало' : 'Много';
console.log(result);