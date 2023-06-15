import { useNavigate, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySearch } from '../redux/productAction';
import { authLogout } from '../redux/authAction';

function Layout() {


	 const navigate = useNavigate();
   const result = useSelector((state) => state.cartData);
   const authenticated = localStorage.getItem('authenticated');
   const [getQuantity, setQuantity] = useState(0);
   const loginData = useSelector((state) => state.authLogin);
   const [auth, setAuth] = useState();

   console.log("before", loginData);

  if(result){
    var i = 0;
    result.map((item, key) => {
          i+=parseInt(item.quantity);  
    });
  }

    useEffect(() => {
      setQuantity(i);
    },[i]);

    const dispatch = useDispatch();

    const searchForProduct = ()=> {
      let productValue = document.getElementById('searchProductValue').value;
      dispatch(getProductBySearch(productValue));

      //console.log("Product Value", productValue);
    }

    // useEffect(() => {
    //   setAuth(authenticated);
    //   console.log("tets");
    // },[auth]);

    // console.log("before", auth);
    // console.log("header", authenticated);

    const handleLogout = () => {
      dispatch(authLogout('false'));
    }


	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
              <form className="form-inline my-2 my-lg-0 mr-auto">
                <input className="form-control mr-sm-2" type="search" id="searchProductValue" placeholder="Search Product" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={searchForProduct}type="button">Search</button>
              </form>
            

              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link"> Home</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/blogs" className="nav-link">Blogs</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/pagination" className="nav-link">Pagination</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/counter" className="nav-link">Counter</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item active">
                { loginData.length > 0 && loginData[0].status === 200 || authenticated == "true" ?
                  <Link to='#' className='nav-link' onClick={handleLogout}>Logout</Link>
                  : 
                  <Link to='/login' className='nav-link'>Login</Link>
                }
                </li>
                <li className="nav-item active">
                  <Link to="/cart" className="nav-link"><img alt="" className="header-cart-image u-image u-image-default u-image-1" src={"/images/cart.png"}/><span className="header-cart-counter">{ getQuantity }</span></Link>
                </li>
              </ul>
            </div>
        </nav>
        <Outlet />
        </>
	)
}

export default Layout;