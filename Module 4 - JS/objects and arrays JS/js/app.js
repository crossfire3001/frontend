/* Доступ к свойствам объекта */

let obj = {
    prop: {
        prop1: {
            prop2: {
                prop3: 'value'
            }
        }
    }
}

console.log(obj.prop.prop1.prop2.prop3); // value
console.log(obj['prop']['prop1']['prop2']['prop3']); // value

// пример 2
let obj2 = {
    prop: 'test'
}

console.log(obj2.prop); // через точку
console.log(obj2['prop']); // через []

// Пример доступа к свойству через значение в переменной
let obj3 = {
    prop: 'apple'
}

let propKey = 'prop';
console.log(obj3[propKey]); // не знаете какое свойство там может находиться и будет найдено по ключу

// пример 3
let person = {
    name: 'Kudzu'
}

console.log(person['name']);

// пример 4
let person2 = {
    name: 'Kudzu'
}

let name = 'name';

console.log(person2['name']);

/* Доступ к данным внутри объекта */

let person3 = {
    name: 'Josef',
    personalData: {
        age: 20,
        job: {
            salary: 2000,
            company: {
                title: 'Google',
                country: 'USA'
            }
        }
    }
}

/* Стандартные функции объекта */

person.hasOwnProperty('name'); // true
person.hasOwnProperty('lastName'); // false

/* Массивы */

// Изменение 2 значения в массиве
let basket = ['яблоко', 'апельсин', 'банан'];
basket[1] = 'киви'; // массив стал таким ['яблоко', 'киви', 'банан']

/* Добавление элемента в конце массива */

basket.push('рыба');
console.log(basket); // ['яблоко', 'киви', 'банан', 'рыба']

/* Удаление последнего элемента из массива */

basket.pop();
console.log(basket); // ['яблоко', 'киви', 'банан']

/* Удаление конкретного элемента из массива */

basket.splice(1, 1);
console.log(basket); // ['яблоко', 'банан']
console.log(basket.indexOf('яблоко')); // 0













