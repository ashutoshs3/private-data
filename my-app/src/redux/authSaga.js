import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import {
	AUTH_LOGIN,
	SET_AUTH_LOGIN,
	AUTH_LOGOUT,
	SET_AUTH_LOGOUT
} from './constant';

function* getAuthData(action) {
	let lgnData = action.data;
	let data = yield axios.post('http://localhost/react_laravel_api/api/login', lgnData);
	yield put({type: SET_AUTH_LOGIN, data});
}

function* authLogout(action) {
	let data = action.data;
	yield put({type: SET_AUTH_LOGOUT, data});
}

function* authSaga() {
	yield takeEvery(AUTH_LOGIN, getAuthData);
	yield takeEvery(AUTH_LOGOUT, authLogout);
}

export default authSaga;