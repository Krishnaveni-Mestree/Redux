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

//Reducer: function which will be taking 2 arguments, initial state and action
const initialState={
    //i want to keep track of pizza base
    pizzaBase:100
}
//reducer func. will return new state based on current state and action
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state, //have to make copy of state for future use
                pizzaBase:pizzaBase-1
            }
        default:
            return state;
    }
}