'use strict';

// Unit link - https://learn.javascript.ru/ifelse#tasks

// Task 1
if ("0") {
  console.log( 'Привет' );
}
// действие выполнится так как в условии строка с цифрой 0, а значит значение true.

// Task 2
var name = prompt('Каково «официальное» название JavaScript?', '');
if (name == 'ECMAScript') {
  console.log('Верно!');
} else {
  console.log('Не знаете? «ECMAScript»!');
}

// Task 3
var number = prompt('enter number', '');
if (number < 0) {
  console.log(-1);
} else if (number > 0) {
  console.log(1);
} else {
  console.log(0);
}

// Task 4
var userName = prompt('Кто пришел?', '');
if (userName === 'Admin') {
  var password = prompt('Password', '');
  if (password === 'Чёрный Властелин') {
    console.log('Добро пожаловать!');
  } else if (password === null) {
    console.log('Вход отменён');
  } else {
    console.log('Пароль неверен');
  }
} else if (userName === null) {
  console.log('Вход отменён');
  } else {
  console.log('Я вас не знаю');
}

// Task 5
result = (a + b < 4) ? 'Мало' : 'Много';

// Task 6
var login = prompt('enter login', '');
var message = (login === 'Вася') ? 'Привет' :
  (login === 'Директор') ? 'Здравствуйте' :
  (login === '') ? 'Нет логина' :
  '';
console.log(message);

// Unit link - https://learn.javascript.ru/logical-ops#tasks

// Task 1
console.log( null || 2 || undefined );
// выведет 2 потому что это значение true.

// Task 2
console.log( console.log(1) || 2 || console.log(3) );
// вначале выполнит console.log(1), а потом сравнит его с 2 и выведет 2, так как это значение true.

// Task 3
console.log( 1 && null && 2 );
// выведет значение null так как это первое значение false.

// Task 4
console.log( console.log(1) && console.log(2) ); 
// сначала выведет console.log(1), а потом его определит как undefinded и выведет undefinded.

// Task 5
console.log( null || 2 && 3 || 4 );
//сначала пройдет операция && и в вернется 3 потому что нет значения false, а в (null || 3 || 4) выведет 3, так как это первое true

// Task 6
var age;
if (age >= 14 && age <= 90)

// Task 7
var age;
if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90))

// Task 8
if (-1 || 0) console.log( 'первое' ); // выведет строку, -1 - это true и это позволяет выполнить условие
if (-1 && 0) console.log( 'второе' ); // не выведет строку, так как && ищет false, и 0 это false
if (null || -1 && 1) console.log( 'третье' ); // выведет строку. Вначале выполняется && оба операнда true вернется значение 1, затем || ищет true и это снова 1.

// Unit link - https://learn.javascript.ru/types-conversion#tasks

// Task 1
'' + 1 + 0 // '10' плюс преобразует 1 строку, а потом так как есть строка '1' происходит преобразование ноль в строку и сложение строк
'' - 1 + 0 // пустая строка это 0, минус оставляет единицу цифрой и плюс ноль равно -1 
true + false // true - это 1, false - это 0. итого 1.
6 / '3' // . равно 2, так как оператор деления работает только с цифрами, то '3'преобразуется в число 3
'2' * '3' // 6. оператор умножение работает только с цифрами, то строки преобразуют в числа и уже с ними проводится операция
4 + 5 + 'px' // '9px' числа 4 и 5 складываются, потом идет преобразование в строку
'$' + 4 + 5 // '&45' первый операнд строка, все операнды преобразуются в строку
'4' - 2 // 2. преобразует строку '4' в число и вычитает 2
'4px' - 2 // NaN. '4px' не может перевести в число и преобразует в undefined, а undefined это NaN, любые операции с NaN дают NaN
7 / 0 // Infinity  получается при делении на ноль
'  -9\n' + 5 // число 5 преобразуется в '5', строки складываются в '  -9\n5'
'  -9\n' - 5 // '  -9\n' - это '-9', преобразуется в число -9, дальше вычитается -5, итого -14
5 && 2 // 2 оператор И ищет false, и если его нет, то выводит последний true
2 && 5 // 5 оператор И ищет false, и если его нет, то выводит последний t rue
5 || 0 // 5 true, оператор ИЛИ ищет true и выводит его или последний false
0 || 5 // 0 false, 5 true, оператор ИЛИ ищет true и выводит его или последний false
null + 1 // null преобразуется в 0, 0 + 1 = 1
undefined + 1 // undefined преобразуется в NaN и дальше прибавляться ничего не будет
null == '\n0\n' // '\n0\n' - преобразует в строку '0', она не равна null, а значит false
+null == +'\n0\n' // +null - преобразуется в 0, +'\n0\n' - преобразуется в 0, они раны поэтому true.
