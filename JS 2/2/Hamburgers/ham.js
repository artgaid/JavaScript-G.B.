class Hamburger {
    constructor() {
        this.topping = [
            { id: 1, title: "Посыпать приправой", calories: 0, price: 15 },
            { id: 1, title: "Полить майонезом", calories: 5, price: 20 },
        ];
        this.burgers = [
            { id: 1, size: "Маленький", calories: 20, price: 50 },
            { id: 2, size: "Средний", calories: 30, price: 75 },
            { id: 3, size: "Большой", calories: 40, price: 100 },
        ];

        this.stuffing = [
            { id: 1, title: "c Сыром", calories: 20, price: 10 },
            { id: 2, title: "с Салатом", calories: 5, price: 20 },
            { id: 3, title: "с Картофелем", calories: 10, price: 15 },
        ];

        this.showSum();
    }

    selectAll(y, name) {
        let x = [];
        let chbox = document.getElementsByName(name);
        for (let i = 0; i < chbox.length; i++) {
            if (chbox[i].checked) {
                x.push(y[i]);
            }
        }
        return x;
    }

    calculatePrice() {
        let result = 0;
        this.selectAll(this.stuffing, "stuff").forEach(stuffing => result += stuffing.price);
        this.selectAll(this.burgers, "size").forEach(burger => result += burger.price);
        this.selectAll(this.topping, "topping").forEach(topping => result += topping.price);

        return result;
    }

    calculateCalories() {
        let result = 0;
        this.selectAll(this.stuffing, "stuff").forEach(stuffing => result += stuffing.calories);
        this.selectAll(this.burgers, "size").forEach(burger => result += burger.calories);
        this.selectAll(this.topping, "topping").forEach(topping => result += topping.calories);

        return result;
    }

    showSum() {
        document.querySelector('#price').textContent = this.calculatePrice();
        document.querySelector('#calories').textContent = this.calculateCalories();
    }
}

function burgerFactory() {
    let burger = new Hamburger();
}