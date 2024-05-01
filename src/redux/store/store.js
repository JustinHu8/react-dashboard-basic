import { createStore, combineReducers } from 'redux';
import userReducer from './../reducers/userReducer';

console.log(userReducer);
console.log('Initial User State:', userReducer(undefined, {}));


const rootReducer = combineReducers({
    user: userReducer
});

const state = rootReducer(undefined, {});
console.log('Combined State:', state);

const store = createStore(rootReducer);

export default store;