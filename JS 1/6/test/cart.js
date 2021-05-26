var itemscheck = document.querySelectorAll(".items-list .items-cards");

var items = [];

var total = 0;

for (let i = 0; i < itemscheck.length; i++) {
    item = {};
    item.title = document.querySelector(".item" + i + " .title").innerHTML;
    item.price = document.querySelector(".item" + i + " .price").innerHTML;
    item.img = document.querySelector(".item" + i + " img");
    item.count = 0;
    item.sum = 0;
    items.push(item);
}


function buyGood(i) {
    items[i].count++;
    total += +items[i].price;
    items[i].sum = items[i].count * items[i].price;

    if (items[i].count < 2) {
        var cartMenu = document.getElementById("cart-menu");
        var cart = document.createElement('div');
        cart.classList.add("cart-product");
        cart.id = "prod" + i;
        cartMenu.prepend(cart);

        var a = document.createElement("a");
        a.classList.add("cart-content");
        a.id = "link123";
        a.href = "#";
        cart.append(a);

        var cartimg = document.getElementById("link123");
        cartimg.innerHTML = "<img src='img/like_photo" + (i + 1) + ".jpg'>";
        var miniimg = document.querySelector("#link123 img");
        miniimg.style.height = "85px";
        miniimg.style.width = "75px";

        var cartDiv = document.createElement('div');
        cartDiv.classList.add("cart-text");
        a.append(cartDiv);

        var cartGoodName = document.createElement('p');
        cartGoodName.innerHTML = items[i].title;
        cartGoodName.classList.add("cart-product-name");
        cartDiv.append(cartGoodName);

        var cartGoodPrice = document.createElement('p');
        cartGoodPrice.classList.add("cart-product-price");
        cartGoodPrice.id = "cartGoodPrice" + i;
        cartGoodPrice.innerHTML = items[i].count + " x " + items[i].price + " $";
        cartDiv.append(cartGoodPrice);

        var cartHr = document.createElement('hr');
        cartHr.classList.add("cart-hr");
        cartHr.id = "hr" + i;
        cart.after(cartHr);

        var delGood = document.createElement('button');
        delGood.classList.add("fa", "fa-times-circle", "cart-x");
        delGood.id = "d" + i;
        delGood.onclick = function del(event) {
            event.target.parentNode.remove();
            items[event.target.id[1]].count = 0;
            document.getElementById("hr" + event.target.id[1]).remove();
            total -= items[event.target.id[1]].sum;
            document.getElementById("cartTotal").innerHTML = total + ",00 $";
        }

        cart.append(delGood);

    } else {
        document.getElementById("cartGoodPrice" + i).innerHTML = items[i].count + " x " + items[i].price + " $";
    }

    document.getElementById("cartTotal").innerHTML = total + ",00 $";
}

function del(event) {
    event.target.parentNode.remove();
    items[event.target.id[1]].count = 0;
    document.getElementById("hr" + event.target.id[1]).remove();
}

console.log(items);