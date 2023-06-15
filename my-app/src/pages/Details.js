import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductById } from "../redux/productAction";
import Button from '@material-ui/core/Button';
import {addToCart} from "../redux/action";

function Details() {

	const location = useLocation();
	const productID = location.state;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductById(productID));
	}, [productID])

	const productDetail = useSelector((state) => state.productData);

	const addItemToCart = () => {
		let quantity = document.getElementById('quantity').value;
		if(quantity != "" && quantity > 0){
			const data = {
				id:productDetail[0].ID+100,
				image:productDetail[0].image,
				name:productDetail[0].name,
				quantity:quantity,
				currency:productDetail[0].currency,
				price:productDetail[0].price
			}

			dispatch(addToCart(data));

			//console.log("data details", data);

		}else{
			alert("Please fill the right value in quantity!");
		}
		
	}

	return (
		<div className="details">
		{productDetail.length != 0 ? 
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="product-image">
							<img src={"/images/" + productDetail[0].image} alt={productDetail[0].image} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="product-name">
							<h2>{productDetail[0].name}</h2>
						</div>
						<div className="product-price">
							<h4>{productDetail[0].currency + productDetail[0].price}</h4>
						</div>
						<div className="product-desc">
							<p>{productDetail[0].desc}</p>
						</div>
						<div className="addtocart">
							<input 
								type="number"
							 	min="1"
							 	id="quantity"
							 	defaultValue="1" />
							<Button
							    onClick={addItemToCart}
							    className="btnAddToCart"
							    color="primary" 
								variant="contained">
								Add To Cart
							 </Button>
						</div>
					</div>
				</div>
			</div>
			: "No data found to display" }
		</div>
	)
}

export default Details;