alert("Привет");
var Tc = +prompt("Задача №1. \nЗадай температуру в градусах по Цельсию");
if (isNaN(Tc) == true) {
    alert("Введите целое число");
} else {
    Tf = (9 / 5) * Tc + 32;
    alert(Tf + " градусов по Фаренгейту");
}

alert("Задача №2. \nРабота с переменными");
var a = 10
var b = 20
alert("A = " + a + "\nB = " + b);
var b = b - a;
var a = a + a;
alert("A = " + a + "\nB = " + b);




alert("Задача №3. \nВасилий = Василий")
var name = "Василий";
alert("name - " + name);
var admin = name;
alert("admin - " + admin);

alert("Задача №4.\n1000+108")
var c = 1000 + "108";
alert(c)

