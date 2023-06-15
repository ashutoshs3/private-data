export const authLogin = (data = [], action) => {
	//console.log(action.data);
	switch(action.type){
		case 'SET_AUTH_LOGIN':

			let response = action.data;
			response = response.data;

			// if(response.length > 0 && loginData[0] !== "false") {
			// 	console.log('wAFJASFSDF');
			// 	if(loginData[0].status === 404){
			// 		document.getElementById('errEmail').innerHTML = "Email ID is not valid.";
			// 	}
			// 	if(loginData[0].status === 405){
			// 		document.getElementById('errPwd').innerHTML = "Password is not valid.";
			// 	}
			// 	if(loginData[0].status === 200){
			// 		let userDtl = {
			// 			id:loginData[0].userDetails.id,
			// 			name:loginData[0].userDetails.name,
			// 			email:loginData[0].userDetails.email
			// 		}
			// 		localStorage.setItem("authenticated", true);
			// 		userDtl = JSON.stringify(userDtl);
			// 		localStorage.setItem("loginUserData", userDtl);
			// 		//setLgnData(loginData.data);
			// 		navigate('/dashboard');
			// 	}
			// }
			return [response];

		case 'SET_AUTH_LOGOUT':
			return [action.data];

		default: 
			return data;
	}
}