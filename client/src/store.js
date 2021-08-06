import {combineReducers} from 'redux';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllHandicraftReducer, addHandicraftReducer, getHandicraftByIdReducer, editHandicraftReducer } from './reducers/handicraftReducers';
import { cartReducer } from './reducers/cartReducer';
import { loginReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducers';
import { placeOrderReducer , getUserOrdersReducer, getAllOrdersReducer} from './reducers/orderReducer';


const finalReducer = combineReducers({
    getAllHandicraftReducer : getAllHandicraftReducer,
    cartReducer : cartReducer,
    loginReducer : loginReducer,
    registerUserReducer : registerUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addHandicraftReducer : addHandicraftReducer,
    getHandicraftByIdReducer : getHandicraftByIdReducer,
    editHandicraftReducer : editHandicraftReducer,
    getAllOrdersReducer:   getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {
    cartReducer : {
    cartItems : cartItems
    },
    loginReducer:{
        currentUser:currentUser
      }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store