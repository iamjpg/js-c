import { combineReducers } from 'redux';
import cryptoReducer from './crypto/crypro.reducer.js';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
