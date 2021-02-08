'use strict'

//Задание 1

// let num = {
//     one: "Единицы ",
//     two: "Десятки ",
//     three: "Сотни "
// };

// function numberToObject() {
//     let n = prompt();
//     let m = parseInt(n);
//     if (m <= 999) {
//         for (let j = 0; j <= 2; j++) {
//             let x = 0;
//             switch (j) {
//                 case 0:
//                     x = m % 10;
//                     m /= 10;
//                     num.one += Math.floor(x);
//                     break;
//                 case 1:
//                     x = m % 10;
//                     m /= 10;
//                     num.two += Math.floor(x);
//                     break;
//                 case 2:
//                     x = m % 10;
//                     m /= 10;
//                     num.three += Math.floor(x);
//                     break;
//             }
//         }
//     } else {
//         console.log('Число больше 1000')
//     }
// }

// numberToObject();
// console.log(num);

//Задание 2

let icecream = {
    name: "Мороженное",
    discrp: "Шоколадное",
    cost: 145
}
let toy = {
    name: "Игрушка",
    discrp: "мягкая",
    cost: 832
}
let pen = {
    name: "Ручка",
    discrp: "Синяя",
    cost: 15
}


let basket = [
    icecream, toy, pen
];


function countBasketPrice() {
    let summ = 0;
    for (let i = 0; i < basket.length; i++) {
        summ = summ + basket[i].cost;
    }
    console.log(summ);
}

countBasketPrice();