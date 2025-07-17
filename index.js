// const EventEmitter= require('events');
// const { emit } = require('process');

// const emitter= new EventEmitter();

// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Order received: ${size} pizza with ${topping}`);
// });

// emitter.emit('order-pizza','large', 'pepperoni');

//---------------------------------------------------------------------------------

// const pizaShop = require('./pizzaShop');
// const pizzaShop = new pizaShop();
// pizzaShop.orderPizza();
// pizzaShop.displayOrders();

// pizzaShop.orderPizza();
// pizzaShop.displayOrders();


const PizzaShop = require('./pizzaShop');
const DrinkShop = require('./drinkShop');

// Create instances of PizzaShop and DrinkShop
const drinkShop = new DrinkShop();
const pizzaShop = new PizzaShop();

pizzaShop.on('order-pizza', (size, topping) => {
    if(size === 'small') {
        drinkShop.drinkSize('small');
    } else if(size === 'medium') {
        drinkShop.drinkSize('medium');
    } else if(size === 'large') {
        drinkShop.drinkSize('large');
    } else {
        console.log('Invalid size');
    }
    console.log(`Order received: ${size} pizza with ${topping}`);
});

pizzaShop.orderPizza();
pizzaShop.displayOrders('large', 'pepperoni');

pizzaShop.orderPizza();
pizzaShop.displayOrders( 'small', 'mushrooms');