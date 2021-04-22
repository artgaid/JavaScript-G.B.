
var link = document.querySelectorAll(".product-flex a");
var img = document.querySelectorAll(".product-flex img");

console.log(link);
console.log(img);

link[0].addEventListener("click", f2);
link[1].addEventListener("click", f1);

for (i = 1; i < img.length; i++) {
    img[i].style.display = "none";
}

var i = 0;
function f1() {
    img[i].style.display = "none";
    i++;
    if (i >= img.length) {
        i = 0;
    }
    img[i].style.display = "block";
}

function f2() {
    img[i].style.display = "none";
    i -= 1;
    if (i < 0) {
        i = img.length - 1;
    }
    img[i].style.display = "block";
}