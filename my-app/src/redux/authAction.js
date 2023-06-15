import {
	AUTH_LOGIN,
	AUTH_LOGOUT
} from './constant';
export const authLogin = (data) => {
	console.log("action",data);
	return {
		type : AUTH_LOGIN,
		data
	}
}

export const authLogout = (data) => {
	return {
		type : AUTH_LOGOUT,
		data
	}
}