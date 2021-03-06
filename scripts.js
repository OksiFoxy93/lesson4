// 1 - Пару минут
function max (number1, number2) {
    if (number1 > number2) {
        return number1
    }
    return number2
}

// 2
function min(...numbers) {
    let arr = [...numbers];
    let result = arr[0];
    for (let key of arr) {
        if (key < result) {
            result = key;
        }
    }
    return result;
}
console.log( min(0, -1, 100, 500, 100500) );


// 3
let users = [
    { firstname: "John", lastname: 'Dough', age: 23 },
    { firstname: "Kate", lastname: 'Hall', age: 33 },
    { firstname: "Bob", lastname: 'Gia', age: 12 },
    { firstname: "Jack", lastname: 'Ronni', age: 15 },
    { firstname: "Alice", lastname: 'Row', age: 43 },
    { firstname: "Steven", lastname: 'Look', age: 11 },
    { firstname: "Jack", lastname: 'Fool', age: 25 },
    { firstname: "Cary", lastname: 'Taft', age: 27 },
];
let filterAge = users.filter((item) => item.age > 18);
console.log(filterAge);

let addFullName = users.map((item) => {
    return{
        ...item,
       fullName: `${item.firstname} ${item.lastname}`
    }
});
console.log(addFullName);

let fullName = addFullName.map((item) => item.fullName);
console.log(fullName);


// 4
function shift (arr) {
    arr.splice(0, 1);
    return arr;
}
console.log(shift([1, 3, "4"]));


// 5
function push (arr, ...item) {
    return (arr.concat(...item));
}
console.log(push([1, 3, "4"], 5, 5, 5,"dds"));


// 6
let source = {firstname: 'Tom', age: 10};
function extend (source, ...add) {
    let result = {};
    for (let key in source) {
        result[key] = source[key];
    }
    for(let i = 0; i < add.length; i++){
        for (let key in add[i]) {
            result[key] = add[i][key];
        }
    }
    return result;
}
let result = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(result);


// 7
function setComment (date, message, author="Anonymous") {
    if ((date && message) === undefined) {
        return (alert("Данные переданы некорректно"))
    }else {
        console.log(`${author}, ${date}\n${message}`)
    }
}

setComment('2016-11-02', 'Everything is ok', 'John');
// Правда мне тут непонятно, если я не введу дату, но введу остальные два параметра, она сработает.


// ЗАМЫКАНИЯ
// 1
function createTimer() {
    let t0 = performance.now();
    return function() {
        let t1 = performance.now();
        return t1 - t0;
    }
}

let timer = createTimer();
alert('!');
alert( timer() );
// Вот тут я тоже не до конца понимаю когда создается переменная t1, когда отрабатывает функция, то есть на строке 107?
// Я расчитываю на этот исход)

// 2
function createAdder(a) {
    return function (b) {
        return a + b;
    };
}

var hello = createAdder('Hello, ');
alert( hello('John') );

var plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );















