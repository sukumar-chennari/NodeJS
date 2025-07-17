class DrinkShop{
    constructor(){
        this.orders = 0;
    }

    drinkSize(size){
        if(size === 'small'){
            console.log('No complimentary drink available');
        }
        else if(size === 'medium'){
            console.log('You get a complimentary small drink');
        }
        else if(size === 'large'){
            console.log('You get a complimentary medium drink');
        }
        else{
            console.log('Invalid size');
        }   
}
}

module.exports = DrinkShop;