const ORDER_PIZZA='ORDER_PIZZA'
//Action : Actions are plain javascript objecct
const action={
    type:ORDER_PIZZA,
    shop_name:'Pizza Shop'
}

//Action Creator:-is a function which returns action
function orderPizza(){
    //return action object
    return {
        type:ORDER_PIZZA,
        shop_name:'Pizza Shop'
    }
}