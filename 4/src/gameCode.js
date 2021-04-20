//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

windowQ(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push([works.a00 + works.a1]);
        windowQ(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers.push([works.b00 + works.b1]);
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers.push([works.b00 + works.b2]);
                saveD();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push([works.a00 + works.a2]);
        windowQ(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                answers.push([works.c00 + works.c1]);
            case 2: // Второе действие
                answers.push([works.c00 + works.c2]);
                saveD();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var n = +prompt("Выберите ход который хотели бы увидеть 1, 2 или 3 ?\n -1 - Выход из игры ");
switch (n) {
    case 1:
        seeAnswer(0);
        break;
    case 2:
        seeAnswer(1);
        break;
    case 3:
        seeAnswer(2);
        break;
}
alert('Спасибо за игру');
console.log(answers);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function saveD() {
    do {
        ok = false;
        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else if (event == 1) {
            answers.push([works.d00 + works.d1]);
            break;
        }
        else if (event == 2) {
            answers.push([works.d00 + works.d2]);
            break;
        }
        else {
            ok = isAnswer(works.d0, event);
        }
    } while (!ok);
}

function windowQ(works00, works1, works2, works0) {
    do {
        ok = false;
        event = +prompt(works00 + works1 + works2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works0, event);
        }
    } while (!ok);
}

function seeAnswer(mas) {
    do {
        ok = false;
        if (n == -1) {
            break;
        }
        else {
            ok = isAnswer(3, n);
        }
    } while (!ok);
    alert(answers[mas]);
}

