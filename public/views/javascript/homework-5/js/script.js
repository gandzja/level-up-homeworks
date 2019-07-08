'use strict';

// Unit link - https://learn.javascript.ru/recursion#tasks

// Task 1
// рекурсия - сделала сама
function sumTo(n) {
  if (n != 0){
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}
console.log(sumTo(100));
//цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

// С использованием формулы для суммы арифметической прогрессии.
function sumTo(n) {
  return (1 + n) / 2 * n;
}

console.log(sumTo(100));


// Task 2
function factorial(n) {
  if (n === 0){
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// Task 3
// рекурсия 
function fib(n) {
  if(n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(3));
console.log(fib(7));
// console.log(fib(77)); - очень медленно

// цикл
function fib(n) {
  let a = 1;
  let b = 1;
  for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
  }
  return b;
}
console.log(fib(3));
console.log(fib(7));
console.log(fib(77)); 


// https://learn.javascript.ru/named-function-expression#tasks

// Task 1
// в первом коде это обычная запись функции Function Declaration, а во вотором это часть Named Function Expression и браузер выдаст ошибку
