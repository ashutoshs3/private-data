import {PRODUCT_LIST, PRODUCT_DETAILS, SEARCH_PRODUCT} from './constant'

export const productList = (data) => {
	return {
		type : PRODUCT_LIST,
		data
	}
}

export const getProductById = (data) => {
	return {
		type : PRODUCT_DETAILS,
		data
	}
}

export const getProductBySearch = (data) => {
	return {
		type : SEARCH_PRODUCT,
		data
	}
}