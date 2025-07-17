const EventEmitter = require('events');

class PizzaShop  extends EventEmitter  {
    constructor(){
        super(); // Call the parent class constructor
        this.orders = 0;
    }

    orderPizza(){
        this.orders++;

    }

    displayOrders(size,topping){
        console.log(`Total orders: ${this.orders}`);
        this.emit('order-pizza', size, topping);
    }
}

module.exports = PizzaShop;