import {createStore, combineReducers,applyMiddleware} from 'redux';

import {recordReducer} from './reducers/recordReducer';
// import thunk from 'redux-thunk';
// import removeReducer from './reducers/removeitem';
//export const store=createStore(combineReducers({red1:recordReducer,red2:removeReducer}),applyMiddleware(thunk));
export const store=createStore(recordReducer);
store.subscribe(()=>{
    console.log('subscribed.....',store.getState());
}
);