/*
* Создайте переменные со значениями:
*/

let myNum = 10;
let myStr = 'строка';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'First Name',
    last: 'Last Name'
};

/*
* Отформатируйте целое число, которое хранится в переменной myNum,
* чтобы получить результат с 2 знаками после запятой.
* Результат сохраните в переменную decimal2:
*/

decimal2 = myNum.toFixed(2);


/*
* Создайте переменную i для которой выполните префиксный и
* постфиксный инкремент и декремент. Поэкспериментируйте с
* результатами, выводя их в консоль:

*/
let i = 100;
console.log(i++); // 100
console.log(i++); // 101
console.log(++i); // 103
console.log(++i); // 104
console.log(--i); // 103
console.log(i--); // 103
console.log(--i); // 101
console.log(i); // 101

/*
* Создайте новую переменную myTest и присвойте ей значение 20.
* Выполните присваивание с операцией, используя операторы:
*      +=, –=, *=, /=, %=.
* Результаты присваиваются в myTest, затем выводятся в консоль.
*
* В вычислениях можно использовать объявленную ранее переменную
myNum и/или числа:
*/

let myTest = 20;
myTest += myNum;
console.log(myTest); // 30

myTest -= myNum;
console.log(myTest); // 20

myTest *= 20;
console.log(myTest); // 400

myTest /= 4;
console.log(myTest); // 100

myTest %= 3;
console.log(myTest); // 1


/*
* Используя свойства и методы объекта Math, присвойте переменным и
* отобразите в консоли:
 */

myPi = Math.PI;
console.log(myPi);

myRound = Math.round(89.279);
console.log(myRound);

myRandom = Math.random() * 10;
console.log(myRandom);

myPow = Math.pow(3, 5);
console.log(myPow);


/*
* Создайте объект с именем strObj. Присвойте ключу str строку текста
* "Мама мыла раму, рама мыла маму", ключу length установите длину
* этой строки:
*/

let strObj = {
   str: 'Мама мыла раму, рама мыла маму'
};
strObj.length = strObj.str.length;

/*
* Проверьте наличие текста 'рама' в поле str объекта strObj,
* позицию сохраните в переменную isRamaPos и выведите ее в консоль.
*/

let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

/*
* Выполните переименование подстроки в строке.
* В качестве исходной строки используйте значение поля str объекта
* strObj, результат сохраните в переменную strReplace и
* отобразите в консоли.
*/

let strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log(strReplace);

/*
* Преобразуйте любую строку в верхний, затем в нижний регистры,
* результат отобразите в консоли.
*/

console.log(strObj.str.toUpperCase()); // МАМА МЫЛА РАМУ, РАМА МЫЛА МАМУ
console.log(strObj.str.toLowerCase()); // мама мыла раму, рама мыла маму

/*
 * Создайте объект userObj, описывающий человека.
 *
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */
let userObj = {
    firstName: 'Dasha',
    lastName: 'Zharskaya',
    age: 34,
};

/*
 * Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
 * состоящее из firstName и lastName, склеенных в строку через пробел.
 *
 * Например:
 * userObj.firstName ← 'Имя
 * userObj.lastName ← Фамилия'
 * userObj.fullName() → 'Имя Фамилия'.
 */
userObj.fullName = function () {
    return userObj.firstName + ' ' + userObj.lastName;
};

console.log(userObj.fullName()); // Dasha Zharskaya

/*
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */

function defUpperStr(str) {
    return (str || 'default text').toUpperCase();
}

/* eslint-disable capitalized-comments */
console.log(defUpperStr('My text')); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT

/*
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 *
 * Например:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

function evenFn(n) {
    let arr = [];
    for(let i = 1; i <= n; ++i) {
        if(i % 2 === 0) arr.push(i);
    }
    return arr;
}

console.log(evenFn(10)); // [2, 4, 6, 8, 10]
console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * ...
 * 7 → 'Воскресенье'
 *
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */

function weekFn(n) {
    let dayName;
    switch(n) {
        case 1: dayName = 'Понедельник'; break;
        case 2: dayName = 'Вторник'; break;
        case 3: dayName = 'Среда'; break;
        case 4: dayName = 'Четверг'; break;
        case 5: dayName = 'Пятница'; break;
        case 6: dayName = 'Суббота'; break;
        case 7: dayName = 'Воскресенье'; break;
        default: dayName = null;
    }
    return dayName;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

/*
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */

function ageClassification(n) {
    let result =
    (n < 0) ? null :
    (n >= 0 && n <= 24) ? 'детский возраст':
    (n > 24 && n <= 44) ? 'молодой возраст':
    (n > 44 && n <= 65) ? 'средний возраст':
    (n > 65 && n <= 75) ? 'пожилой возраст':
    (n > 75 && n <= 90) ? 'старческий возраст':
    (n > 90 && n <= 122) ? 'долгожители': null;

    return result;
}

console.log('-1 :', ageClassification(-1)); // -1 : null
console.log('5 :', ageClassification(5)); // 5 : детский возраст
console.log('34 :', ageClassification(34)); // 34 : молодой возраст
console.log('50 :', ageClassification(50)); // 50 : средний возраст
console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
console.log('80 :', ageClassification(80)); // 80 : старческий возраст
console.log('110 :', ageClassification(110)); // 110 : долгожители
console.log('130 :', ageClassification(130)); // 130 : null

/*
 * Блок тестирования:
 */

console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);


/*
 * Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
 * Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор while
 */

function oddFn(n) {
    let arr = [];
    let i = 0;
    while (i <= n) {
        if (i % 2 !== 0) arr.push(i);
        i++;
    }
    return arr;
}

console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 */

/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.
// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a+b;
}

 function mainFunc(a, b, func) {
    if (typeof func !== 'function') return false;
    return func(a, b);
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false


