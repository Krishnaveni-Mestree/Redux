const redux=require('redux');
const reduxLogger=require('redux-logger')

const createStore=redux.createStore;
const combineReducer=redux.combineReducers;
const logger=reduxLogger.createLogger();

//inside redux, we have applyMiddleware
const applyMiddleware=redux.applyMiddleware;

const ORDER_PIZZA='ORDER_PIZZA';
const ORDER_BURGER='ORDER_BURGER';

//Action Creators:-
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

//Initial states
const initialStateForPizza={
    pizzaBase:100,
}
const initialStateForBurger={
    burgerBuns:200
}

//Reducers
const reducerPizza=(state=initialStateForPizza,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
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
    pizza:reducerPizza,
    burger:reducerBurger
})

//STORE - ITS 5 RESPONSIBILITIES

const store=createStore(rootReducer,applyMiddleware(logger));

console.log("Intial State :",store.getState());

const unSubscribe=store.subscribe(()=>{})   //logger will take care of all logs of application

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())
store.dispatch(orderBurger())

unSubscribe();
store.dispatch(orderPizza())
store.dispatch(orderPizza()) 