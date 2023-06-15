import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import {removeFromCart, emptyCart, updateCart} from '../redux/action'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Header from '../components/Header';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Cart(){

	const cartData = useSelector((state) => state.cartData);

	const [open, setOpen] = useState(false);
	const [getPid, setPid] = useState(0);

	const navigate = useNavigate();

	const ref = useRef(null);
	//console.log("cart page data ",cartData);

	const shipping = {
		price:50
	}

	console.log(cartData);
	if(cartData) {
		var grandTotal = cartData.reduce(function(acc,val){
			return acc+val.quantity * val.price;

		},0)
	}
	
 const dispatch = useDispatch();

 const updateCartfunc = () => {
 	var inputs, index;
 	var cartUpdatedData = [];
 	inputs = document.getElementsByClassName('quanty');
	for (index = 0; index < inputs.length; ++index) {
			var pid = inputs[index].getAttribute('id');
			cartUpdatedData.push({'id':pid, 'quantity':inputs[index].value});
	}

	dispatch(updateCart(cartUpdatedData));

 	//console.log(cartUpdatedData);
 }

	  const handleClickOpen = (pid) => {
	    setOpen(true);
	    setPid(pid);
	  };

	  const handleClose = () => {
	    setOpen(false);
	    dispatch(removeFromCart(getPid));
	  };

	  const handleDisagree = () => {
	  	setOpen(false);
	  }

	  const goToDetails = (id)=> {
	  	 navigate('/product/details/'+id, {state:id});
	  }

	return(
		<>

	{/* ==========  dialog box here ======  */}
		<Dialog
	        open={open}
	        TransitionComponent={Transition}
	        keepMounted
	        onClose={handleDisagree}
	        aria-labelledby="alert-dialog-title"
	        aria-describedby="alert-dialog-description"
	      >
	        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
	        <DialogContent>
	          <DialogContentText id="alert-dialog-description">
	            You want to remove this product from your cart.
	          </DialogContentText>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={handleDisagree} color="primary">
	            Cancel
	          </Button>
	          <Button onClick={handleClose} color="primary" autoFocus>
	            OK
	          </Button>
	        </DialogActions>
	      </Dialog>

      {/* ==========  dialog box here =======  */}

		<div className="cart-external">
			{ (cartData.length > 0) ?
			<div className="wrap-button">
			<div className="cart-internal">
				<div className="cart-section">
					<table className="cart-table">
						<tr>
							<th></th>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Sub Total</th>
						</tr>

						{ cartData.map((products, key) => (
						<tr>
							<td>
							<a href="#" 
							onClick={() => handleClickOpen(products.id)} 
							title="Remove">&#x2718;</a>
							</td>
							<td><img src={"/images/" + products.image } alt="{ products.image }" onClick={() => goToDetails(products.id - 100)}/></td>
							<td><p href="#" onClick={() => goToDetails(products.id - 100)}>{ products.name }</p></td>
							<td>{ products.currency + products.price }</td>
							<td>
							<input 
							ref={ref}
							type="text" 
							name="quantity"
							className="quanty"
							id={products.id}
							defaultValue={ products.quantity }
							 />
							</td>
							<td>{ products.currency + products.quantity*products.price }</td>
						</tr>	
						)) }
						<tr>
							<th colspan="2">Total</th>
							<th></th>
							<th></th>
							<th></th>
							<th>{"$"+grandTotal}</th>
						</tr>
					</table>	
				</div>
				<div className="cartBtn">
					<Button
					    onClick={()=>dispatch(emptyCart('empty'))}
					    className="emptyCrtBtn"
					    color="primary" 
						variant="contained">
						Empty Cart
					 </Button>
					 <Button
					 	onClick={updateCartfunc}
					    className="updateCrtBtn"
					    color="primary" 
						variant="contained">
						Update Cart
					 </Button>
				</div>
			{/* ============ Checkout Section start from here ===========*/}

			  	<div className="checkout-inner">
					<div className="checkout-section">
						<table className="cart-table">
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
					<div className="checkoutBtn">
						<Button
						 	onClick={()=>navigate('/order')}
						    className="btnCheckout"
						    color="primary" 
							variant="contained"
							size="large">
							Proceed to Checkout
						 </Button>
					</div>
			  	</div>
			</div>	
			</div>
			: <div className='empty-cart'>
			    Your cart is empty &nbsp; 
			    <Button color="primary" variant="contained">
			    <a className='shopnowlink' href='shop'>Shop Now</a>
			    </Button>
			   </div> }

		 </div>
		
		</>
	);
}

export default Cart;