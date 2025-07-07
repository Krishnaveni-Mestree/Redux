const redux=require('redux')
const createStore=redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const thunk=require('redux-thunk').thunk;
const axios=require('axios');

const FETCH_REQUEST='FETCH_REQUEST';
const FETCH_SUCCESS='FETCH_SUCCESS'
const FETCH_ERROR='FETCH_ERROR';


//state
const initialState={
    loading:false,
    products:[],
    error:false
}

//Actions
function fetchRequest(){
    return {
        type:FETCH_REQUEST
    }
}
function fetchSuccess(products){
    return {
        type:FETCH_SUCCESS,
        payload:products
    }
}
function fetchError(){
    return {
        type:FETCH_ERROR
    }
}

//Reducers
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case FETCH_ERROR:
            return{
                ...state,
                loading:false,
                error:true
            }
        default:
            return state;
    }
}

//thunk Action creator
const fetchProducts=()=>{
    //instead of returning actions , action creators will return function
    //this func. does not have to be pure, inside this we can get data from API calls and we can dispatch the action
    return function(dispatch){
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            //res.data
            const products=res.data.map((prod)=>prod.title)
            console.log(products);
            dispatch(fetchSuccess(products));
        })
        .catch(err=>{
            dispatch(fetchError());
        })
    }
}

//Creating store
const store=createStore(reducer,applyMiddleware(thunk));

//subscribing to store
store.subscribe(()=>console.log(store.getState()));

//dispatch the fetchProducts
store.dispatch(fetchProducts());