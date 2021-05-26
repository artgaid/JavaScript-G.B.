
alert("Задвание №1. \nПочему код даёт именно такие результаты? \nОбьяснения дал в комментариях к коду ))");
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - "++" перед значение "a", добовляет +1 к значению "a"
d = b++; alert(d);           // 1 - "++" после значения "b", добовляет +1 к значению, но уже после выполнения условивия вывода
c = (2 + ++a); alert(c);      // 5 - "a" рассматриваеться с предыдущего значения, т.е. равное 2  и +1 = 3, ++а = 3 следовательно и "c" = 5
d = (2 + b++); alert(d);      // 4 - тоже самое и со значением "b", после предыдущего действия оно равно 2, а "++" добавляет +1, только уже после выполнения действий 
alert(a);                    // 3   - в конечном итоге оба значения равны 3 
alert(b);                    // 3   - в конечном итоге оба значения равны 3 

alert("Задание №2. Чему будет равен x в примере? \nx = 1 + (a *= 2)");
var a = 2;
var x = 1 + (a *= 2);
alert(x);

alert("Задание №3. Задайте две переменные A и B ");
var a = +prompt("Переменная A");
var b = +prompt("Переменная B");
if (a >= 0 && b >= 0) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    alert("Разность двух переменных: " + (max - min));
} else if (a < 0 && b < 0) {
    alert("Произведение двух переменных: " + (a * b));
} else {
    alert("Сумма двух переменных: " + (a + b));
}

alert("Задание №4. \nПрисвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.\nОтвет вывел в консоль");

var a = +prompt("Задайте переменную A от 0 до 15");

function rec(n) {
    console.log(n);
    if (n == 15) {
        return;
    }
    return rec(n + 1);
}

switch (true) {
    case (a < 15):
        rec(a);
        break;
    default:
        console.log("Задано неверное число");
}

alert("Задание №5. \nРеализовать основные 4 арифметические операции в виде функций с двумя параметрами A и B.");

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    return (max - min);
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

var a = +prompt("A");
var b = +prompt("B");
alert(sum(a, b));
alert(diff(a, b));
alert(mult(a, b));
alert(div(a, b));

alert("Задание №6. Реализовать функцию с тремя параметрами, \nвыполнить одну из арифметических операций (+,-,*,/)");

var a = +prompt("A");
var b = +prompt("B");
var operation = prompt("Operation (+,-,*,/)");


function mathOperation(a, b, operation) {
    switch (operation) {
        case "+":
            alert(sum(a, b));
            break;
        case "-":
            alert(diff(a, b));
            break;
        case "*":
            alert(mult(a, b));
            break;
        case "/":
            alert(div(a, b));
            break;
        default:
            alert("Неверное значение");
    }

}

mathOperation(a, b, operation);

alert("Задание №8*. С помощью рекурсии организовать функцию возведения числа в степень.");

var val = +prompt("Введите число");
var pow = +prompt("Введите степень");
var s = 1;

function power(s, val, pow) {
    s = s * val;
    if (pow == 1) {
        return s;
    }
    return power(s, val, (pow - 1));
}

power(s, val, pow);
alert(power(s, val, pow));

