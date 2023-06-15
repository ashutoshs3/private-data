import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import {authLogin} from '../redux/authAction';
import Header from '../components/Header';

function Login() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [lgnData, setLgnData] = useState();

	// const loginData = useSelector((state) => state.authLogin);
	// console.log("Login page", loginData.length);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const [usrnme, pswd] = event.target;

		const error = [];

		if(usrnme.value == ""){
			document.getElementById('errEmail').innerHTML = "Please fill out this field";
			error.push("email");
		}else{
			document.getElementById('errEmail').innerHTML = "";
		}

		if(pswd.value == ""){
			document.getElementById('errPwd').innerHTML = "Please fill out this field";
			error.push("pass");
		}else{
			document.getElementById('errPwd').innerHTML = "";
		}

		if(error.length > 0){
        	return false;
        }

		const data = {
			email : usrnme.value,
			password : pswd.value
		}

		//dispatch(authLogin(data));

		await axios.post('http://localhost/react_laravel_api/api/login', data)
		.then((res) => {
			let response = res.data;
			if(response.status === 404){
				document.getElementById('errEmail').innerHTML = "Email ID is not valid.";
			}
			if(response.status === 405){
				document.getElementById('errPwd').innerHTML = "Password is not valid.";
			}
			if(response.status === 200){
				let userDtl = {
					id:response.userDetails.id,
					name:response.userDetails.name,
					email:response.userDetails.email
				}
				localStorage.setItem("authenticated", true);
				userDtl = JSON.stringify(userDtl);
				localStorage.setItem("loginUserData", userDtl);
				setLgnData(res.data);
				navigate('/dashboard');
			}
		});
		
	}

	// if(loginData.length > 0 && loginData[0] !== "false") {
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



	//console.log(lgnData); 


	return (
		<>
		<div className="login">
			<h2>Login Form</h2>

				<form onSubmit={handleSubmit}>
				  <div className="container">
				    <label><b>Username</b><sup>*</sup></label>
				    <input type="text" placeholder="Enter Username" name="uname" id="usrnme" />
				    <div id="errEmail" className="error-msg"></div>

				    <label><b>Password</b><sup>*</sup></label>
				    <input type="password" placeholder="Enter Password" name="psw" id="pswd" />
				    <div id="errPwd" className="error-msg"></div>

				    <button type="submit">Login</button>
				    <label>
				      <input type="checkbox" name="remember" /> Remember me
				    </label>
				  </div>

				  <div className="container" style={{backgroundColor:'#f1f1f1'}}>
				    <button type="button" className="cancelbtn" onClick={()=> navigate('/register')}>Register Yourself</button>
				    <span className="psw">Forgot <a href="#">password?</a></span>
				  </div>
				</form>
		</div>
		</>
	)
}

export default Login;