import {
	ADD_TO_CART, 
	REMOVE_FROM_CART, 
	EMPTY_CART, 
	UPDATE_CART,
} from './constant';

export const addToCart = (data) => {
	//console.log("item data", data);
	return {
		type : ADD_TO_CART,
		data
	}
}

export const removeFromCart = (data) => {
	console.log("remove item data", data);
	return {
		type : REMOVE_FROM_CART,
		data
	}
}

export const emptyCart = (data) => {
 	console.log("empty data from cart", data);
 	return {
 		type : EMPTY_CART,
 		data
 	}
}

export const updateCart = (data) => {
 	//console.log("update data into cart", data);
 	return {
 		type : UPDATE_CART,
 		data
 	}
}
