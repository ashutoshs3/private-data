import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';
import Swal from "sweetalert2";

function Registration() {

	const [register, setRegister] = useState();
	const navigate = useNavigate();

	const rptPassword = (event) => {
		let rptPswd = event.target.value;
		let pswd = document.getElementById('pwd').value;
		if(rptPswd != pswd){
			document.getElementById('errPwdRpt').innerHTML = "Password do not match.";
			document.getElementById('scsPwdRpt').innerHTML = "";
		}else{
			document.getElementById('errPwdRpt').innerHTML = "";
			document.getElementById('scsPwdRpt').innerHTML = "Password matched.";
		}
		console.log(event.target.value);

	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		const [name, email, pwd, pwdRpt] = event.target;

		const error = [];

		let pass = pwd.value;
		let pattern = /^(?=.*[A-Z]\w)(?=.*\d)(?=.*[a-z]).{4,7}$/;
		let rgx = new RegExp(pattern);

		if(name.value == ""){
			document.getElementById('errName').innerHTML = "Please fill out this field";
			error.push("name");
		}else{
			document.getElementById('errName').innerHTML = "";
		}

		if(email.value == ""){
			document.getElementById('errEmail').innerHTML = "Please fill out this field";
			error.push("email");
		}else{
			document.getElementById('errEmail').innerHTML = "";
		}

		if(pass == ""){
			document.getElementById('errPwd').innerHTML = "Please fill out this field";
			error.push("pass");
		}else if(rgx.test(pass) == false){
			document.getElementById('errPwd').innerHTML = "<li>Password should be greater than 3 and less than 9.</li><li>First letter shoud be character.</li><li>First letter should be in capital letter.</li>";
			error.push("pass");
		}else{
			document.getElementById('errPwd').innerHTML = "";
		}

		if(pwdRpt.value == ""){
			document.getElementById('errPwdRpt').innerHTML = "Please fill out this field";
			error.push("passRpt");
		}else if(pwdRpt.value != pass){
			document.getElementById('errPwdRpt').innerHTML = "Password do not match.";
			error.push("passRptMch");
		}else{
			document.getElementById('errPwdRpt').innerHTML = "";
		}

        
        if(error.length > 0){
        	return false;
        }

		const data = {
			name : name.value,
			email : email.value,
			password : pwd.value,
		}

		await axios.post('http://localhost/react_laravel_api/api/register', data)
		.then((res) => {
			let response = res.data;
			if(response.status === 200){
				Swal.fire({  
			      title: 'Success',  
			      type: 'success',  
			      text: 'You have registered successfuly.',  
			    }); 

			}else if(response.status === 404){
				Swal.fire({  
			      title: 'Email is already exist.',  
			      type: 'error',  
			      text: 'Please try with another!',  
			    }); 
			}else{
				Swal.fire({  
			      title: 'Something went wrong.',  
			      type: 'error',  
			      text: 'Please try again!',  
			    }); 
			}
			setRegister(response);
		});

	}
	

	return (
		<div className="registration">
			<form style={{border:'1px solid #ccc'}} onSubmit={handleSubmit}>
			  <div className="container">
			    <h1>Sign Up</h1>
			    <p>Please fill in this form to create an account.</p>
			    <hr />

			    <label><b>Name</b><sup>*</sup></label>
			    <input type="text" placeholder="Enter Name" name="name" id="name"/>
			    <div id="errName" className="error-msg"></div>

			    <label><b>Email</b><sup>*</sup></label>
			    <input type="text" placeholder="Enter Email" name="email" id="email"/>
			    <div id="errEmail" className="error-msg"></div>

			    <label><b>Password</b><sup>*</sup></label>
			    <input type="password" placeholder="Enter Password" name="psw" id="pwd"/>
			    <div id="errPwd" className="error-msg"></div>

			    <label><b>Repeat Password</b><sup>*</sup></label>
			    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="pwdRpt" onChange={rptPassword}/>
			    <div id="errPwdRpt" className="error-msg"></div>
			    <div id="scsPwdRpt" className="sucess-msg"></div>

			    <label>
			      <input type="checkbox" name="remember" style={{marginBottom:'15px'}} /> Remember me
			    </label>
			    
			    <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

			    <div className="clearfix">
			      <button type="button" className="cancelbtn" onClick={() => navigate('/login')}>Cancel</button>
			      <button type="submit" className="signupbtn">Sign Up</button>
			    </div>
			  </div>
			</form>
		</div>
	)
}

export default Registration;