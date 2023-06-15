
export const cartData = (data = [], action) => {
	switch (action.type){
		case 'ADD_TO_CART':
			var itemInCart = data.find((item) => item.id == action.data.id);
			if(itemInCart){
				//const remData = data.filter((el) => el.id != action.data.id);

				//console.log("item in cart = ", itemInCart);

				itemInCart.quantity = parseInt(itemInCart.quantity) + parseInt(action.data.quantity);

				 //const dataSet = [...data, itemInCart];

				 //console.log("Duplicate data in cart", data);

				 return [...data];

			}else{
				   	return [...data, action.data];

				 	//console.log("Data in cart", data);

			}
				//console.log("data in find==", itemInCart);
				// var addQuantity = data.filter(function (el){
				// 	return el.id != action.data.id
				// })
			
			 
			break;

		case 'REMOVE_FROM_CART':
			console.log('check reducer');
			var newCartData = data.filter(function (el){
				return el.id != action.data
			})
			return data = newCartData;
			break;
		case 'EMPTY_CART':
			return data = [];
		case 'UPDATE_CART':
			let updatedCart = action.data;
			//console.log('updated cart value', updatedCart);
			//console.log('old cart value', data);
			data.forEach((e1, index)=>updatedCart.forEach((e2, index)=> {if(e1.id == e2.id){
					e1.quantity = e2.quantity;
					//console.log("Old cart", e1.quantity);
					//console.log("upadated cart", e2);
			    }
			  }
			));
			
			return [...data];
			break;
		default: 
			return data;
	}
}