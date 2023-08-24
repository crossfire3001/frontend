/* Передача параметров в функцию */
function showMessage(message) {
    let result = 'Ваше сообщение: ' + message;
    console.log(result);
}

showMessage('ni hai 1');
showMessage('ni hai 2');
showMessage('ni hai 3');


/* Передача нескольких параметров */
function sum(a, b) {
    let sum = a + b;
    console.log('Сумма: ' + sum);
}

sum(1, 2);
sum(3, 4);

// отсутствие второго аргумента
sum(10) // NaN

// параметры по умолчанию если 2-й параметр не был передан
function minus(a, b = 1) {
    let minus = a - b;
    console.log('Сумма: ' + minus);
}

minus(10); // 9

let one = 1;
let two = 2;
let three = 3;

// передача внешних переменных
minus(three, two);


/* Возвращение результата */

function my(a, b) {
    return a + b;
}

let total = my(1, 3);
console.log(total); // 4

// пример 2
function f(a, b) {
    let sum = a + b;
    return sum;
}

let results = f(3, 10);
console.log(results);
console.log('Результат ' + f(three, two));

/* Функция может быть в переменной */
let os = function(a, b) {
    return a + b;
} // В отличие от обычной функции ее можно вызывать только после объявления

