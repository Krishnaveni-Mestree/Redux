const redux=require('redux');
const createStore=redux.createStore;
const combineReducer=redux.combineReducers;

const ORDER_PIZZA='ORDER_PIZZA';
const ORDER_BURGER='ORDER_BURGER';

//Action Creator:-is a function which returns action
function orderPizza(){
    //return action object
    return {
        type:ORDER_PIZZA,
    }
}

function orderBurger(){
    return{
        type:ORDER_BURGER,
    }
}

//Reducer: function which will be taking 2 arguments, initial state and action
const initialStateForPizza={
    pizzaBase:100,
}
const initialStateForBurger={
    burgerBuns:200
}
//reducer func. will return new state based on current state and action
const reducerPizza=(state=initialStateForPizza,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state, //have to make copy of state for future use
                pizzaBase:state.pizzaBase-1
            }
        default:
            return state;
    }
}

const reducerBurger=(state=initialStateForBurger,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
                burgerBuns:state.burgerBuns-1
            }
        default:
            return state;
    }
}

//combining reducers
const rootReducer=combineReducer({
    reducerPizza,
    reducerBurger
})

//STORE -ITS 5 RESPONSIBILITIES
//1- Store needs to hold application state
const store=createStore(rootReducer);

//2- It exposes a method called getState which gives your application
//access to the current state in the store
console.log("Intial State :",store.getState());

//3- Registers listeners via subscribe(listener)
const unSubscribe=store.subscribe(()=>console.log("Updated State :",store.getState()))

//4- Allows state to be updated via dispatch(action)
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())
store.dispatch(orderBurger())


//5- handles unregistering of listeners via the function returned by subscribe(listener)
unSubscribe()
store.dispatch(orderPizza())
store.dispatch(orderPizza()) 