import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

function Order () {

	const cartData = useSelector((state) => state.cartData);

	if(cartData) {
		var grandTotal = cartData.reduce(function(acc,val){
			return acc+val.quantity * val.price;

		},0)
	}

	const shipping = {
		price:50
	}

	const orderData = () => {
		var fname = document.getElementById('first_name').value;
		var lname = document.getElementById('last_name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var address = document.getElementById('address').value;
		if(fname == ""){
			document.getElementById('firstName').innerHTML = 'Please fill out this field';
		}else{
			document.getElementById('firstName').innerHTML = '';
		}
		if(lname == ""){
			document.getElementById('lastName').innerHTML = 'Please fill out this field';
		}else{
			document.getElementById('lastName').innerHTML = '';
		}
		if(email == ""){
			document.getElementById('memail').innerHTML = 'Please fill out this field';
		}else{
			document.getElementById('memail').innerHTML = '';
		}
		if(phone == ""){
			document.getElementById('mphone').innerHTML = 'Please fill out this field';
		}else{
			document.getElementById('mphone').innerHTML = '';
		}
		if(address == ""){
			document.getElementById('maddress').innerHTML = 'Please fill out this field';
		}else{
			document.getElementById('maddress').innerHTML = '';
		}
		
	}


	return (
		<div className="order-wrapper">
			<div className="container">
			    <div className="row">
			     	<div className="col-md-7">
				     	<div className="billing-area">
				     		<h2>Billing Informations</h2>
				     		<form className="billing-form">
				     			<div className="form-group">
								    <label for="first-name">First Name:</label>
								    <input type="text" className="form-control" id="first_name" />
								    <div id="firstName"></div>
								 </div>
								 <div className="form-group">
								    <label for="last name">Last Name:</label>
								    <input type="text" className="form-control" id="last_name" />
								 	<div id="lastName"></div>
								 </div>
								 <div className="form-group">
								    <label for="email">Email:</label>
								    <input type="email" className="form-control" id="email" />
								 	<div id="memail"></div>
								 </div>
								 <div className="form-group">
								    <label for="phone">Phone:</label>
								    <input type="text" className="form-control" id="phone" />
								 	<div id="mphone"></div>
								 </div>
								 <div className="form-group">
								    <label for="address">Address:</label>
								    <input type="text" className="form-control" id="address" />
								 	<div id="maddress"></div>
								 </div>
				     		</form>
				     	</div>
			     	</div>
			     	<div className="col-md-5">
				     	<div className="order-summary">
							<table className="order-table">
								<tr>
									<th>Total</th>
									<td>{"$"+grandTotal}</td>
								</tr>
								<tr>
									<th>Shipping</th>
									<td>${shipping.price}</td>
								</tr>	
								<tr>
									<th>Grand Total</th>
									<th>${grandTotal+shipping.price}</th>
								</tr>
							</table>	
				     	</div>
				     	<div className="orderBtn">
							<Button
								onClick={orderData}
							    className="btnOrder"
							    color="primary" 
								variant="contained"
								size="large">
								Place Order
							 </Button>
						</div>
			     	</div>
			    </div>
			</div>
		</div>
	)
}

export default Order;