'use strict';

// Unit https://learn.javascript.ru/number#tasks

// Task 1
var a = +prompt('enter the first term', '');
var b = +prompt('enter the second term', '');

console.log(a + b);

// Task 2
// из за потери точности toFixed округляет 6,35 вниз и получаем 6,3

// Task 3
let price1 = 10;
let price2 = 20;
console.log(((price1 + price2) / 100 ) + '$');

// let price1 = 0.1;
// let price2 = 0.2;
// console.log((price1 + price2).toFixed(2) + '$');
// Task 4
// не решила

// Task 5
function fib (n) {
  let a = 1;
  let b = 1;
  for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
  }
  return b;
}

function fibBinet (n) {
  return Math.round(Math.pow(((1 + Math.sqrt(5)) / 2), n) / Math.sqrt(5));
}

console.log(fib(3));
console.log(fibBinet(3));

console.log(fib(7));
console.log(fibBinet(7));

console.log(fib(77)); 
console.log(fibBinet(77));
// разница в ошибках округления

// Task 6
// не решила

// Task 7
// не решила

// Task 8
// не решила

// Unit https://learn.javascript.ru/string#tasks

// Task 1
function ucFirst (str) {

  if (str === false) return str;
  return str.charAt(0).toUpperCase() + str.substr(1);
}
console.log(ucFirst('vasya'));

// Task 2
function checkSpam (str) {
  str = str.toLowerCase();
  return str.indexOf('viagra') !== -1 || str.indexOf('xxx') !== -1;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

// Task 3
function truncate (str, maxlength) {
  if (str.length > maxlength) {
      return str.slice(0, maxlength-1) + '...';
  }
  return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));

// Task 4
function extractCurrencyValue(str) {
  return str = str.substring(1, str.length);
}
  console.log(extractCurrencyValue('$120'));


// Additional task 1
не решила

