import { takeEvery, put } from 'redux-saga/effects'
import { 
	PRODUCT_LIST,
 	SET_PRODUCT_LIST, 
 	PRODUCT_DETAILS, 
 	SET_PRODUCT_DETAILS, 
 	SEARCH_PRODUCT, 
  } from './constant';


function* getProductList() {
	let data = yield fetch('http://localhost:8000/products');
	data = yield data.json();
	yield put({type: SET_PRODUCT_LIST, data});
	console.log("product list data", data);
}

function* getProductById(action) {
	let productID = action.data;
	let data = yield fetch('http://localhost:8000/products/?ID='+productID);
	data = yield data.json();
	yield put({type: SET_PRODUCT_DETAILS, data});
	//console.log("action data in saga=", data);
}

function* getProductBySearch(action) {
	let arrp = [];
	let pattern = action.data;
	let data = yield fetch('http://localhost:8000/products');
	data = yield data.json();
	var reg = new RegExp(pattern, 'i');
	data.forEach((product, key) => {
			if(reg.test(product.name)){
				arrp.push(product);
			}
		});

	data = yield arrp;
	yield put({type: SET_PRODUCT_LIST, data});
}


function* productSaga(){
	yield takeEvery(PRODUCT_LIST, getProductList);
	yield takeEvery(PRODUCT_DETAILS, getProductById);
	yield takeEvery(SEARCH_PRODUCT, getProductBySearch);
}

export default productSaga;