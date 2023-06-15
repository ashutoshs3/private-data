
export const productData = (data = [], action) => {
	switch (action.type) {
		case "SET_PRODUCT_LIST" :
			 return [...action.data];
		case "SET_PRODUCT_DETAILS" :
			 return [...action.data];
		case "SET_SEARCH_PRODUCT" :
		     console.log("we are in reducer ==", action.data);
			 return [...action.data];
		default :
			return data;
	}
}
