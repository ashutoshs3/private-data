import { combineReducers } from 'redux';
import { cartData } from './reducer';
import { productData } from './productReducer';
import { authLogin } from './authReducer';

export default combineReducers({
 cartData, 
 productData,
 authLogin
})