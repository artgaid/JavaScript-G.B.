var table = document.createElement("table");
table.id = "y";
var tr, td, i;
var figureWhite = ["", "&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;", "", "&#9817;"];
var figureBlack = ["", "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;", "", "&#9823;"];
var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];


function addFigure(x, mas) {
    td = document.createElement("td");
    td.setAttribute("class", x + j);
    a = document.createElement("a");
    a.href = "#";
    a.innerHTML = mas;
    td.append(a);
}

function addNumbers(x) {
    td = document.createElement("td");
    td.setAttribute("class", "b d" + j);
    td.innerHTML = x;
}

function addTr() {
    tr = document.createElement("tr");
    tr.setAttribute("class", "a" + i);
    table.append(tr);
}

function addBlackWhite(x) {
    td = document.createElement("td");
    td.setAttribute("class", x + j);
}

function addfigurePawn(x, y, mas) {
    addTr();
    for (j = 0; j < 10; j++) {
        if (j == 0) {
            addNumbers(i);
        }
        else if (j == 9) {
            addNumbers(9 - i);
        }
        else if (j % 2 == 0) {
            addFigure(x, mas);
        }
        else {
            addFigure(y, mas);
        }
        tr.append(td);
    }
}

for (i = 0; i < 10; i++) {
    if (i == 0 || i == 9) {
        addTr();
        for (j = 0; j < 10; j++) {
            td = document.createElement("td");
            td.innerHTML = letters[j];
            tr.append(td);
        }
    }
    else if (i == 1) {
        addTr();
        for (j = 0; j < 10; j++) {
            if (j == 0) {
                addNumbers(i);
            }
            else if (j == 9) {
                addNumbers(9 - i);
            }
            else if (j % 2 == 0) {
                addFigure("c d", figureWhite[j]);
            }
            else {
                addFigure("b d", figureWhite[j]);
            }
            tr.append(td);
        }
    }
    else if (i == 2) {
        addfigurePawn("b d", "c d", figureWhite[10]);
    }
    else if (i == 8) {
        addTr();
        for (j = 0; j < 10; j++) {
            if (j == 0) {
                addNumbers(i);
            }
            else if (j == 9) {
                addNumbers(9 - i);
            }
            else if (j % 2 == 0) {
                addFigure("b d", figureBlack[j]);
            }
            else {
                addFigure("c d", figureBlack[j]);
            }
            tr.append(td);
        }
    }
    else if (i == 7) {
        addfigurePawn("c d", "b d", figureBlack[10]);
    }
    else if (i % 2 == 0) {
        addfigurePawn("b d", "c d", "");
    }
    else {
        addfigurePawn("c d", "b d", "");
    }
}

document.getElementById("x").append(table);