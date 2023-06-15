import { useNavigate, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySearch } from '../redux/productAction';
import { authLogout } from '../redux/authAction';

function Header (){

   let navigate = useNavigate();
   const dispatch = useDispatch();
   const result = useSelector((state) => state.cartData);
   const authenticated = localStorage.getItem('authenticated');
   let useDetails = localStorage.getItem('loginUserData');
   useDetails = JSON.parse(useDetails);
   const [getQuantity, setQuantity] = useState(0);
   //const loginData = useSelector((state) => state.authLogin);
   const [auth, setAuth] = useState(authenticated);

  if(result){
    var i = 0;
    result.map((item, key) => {
          i+=parseInt(item.quantity);  
    });
  }

    useEffect(() => {
      setQuantity(i);
    },[i]);

    

    const searchForProduct = ()=> {
      let productValue = document.getElementById('searchProductValue').value;
      dispatch(getProductBySearch(productValue));

      //console.log("Product Value", productValue);
    }

    console.log('before auth value', auth);

    const handleLogout = () => {
      //dispatch(authLogout('false'));
        localStorage.removeItem("authenticated");
        localStorage.removeItem("loginUserData");
        window.location.href = "/login";
        setAuth(Math.random());
        
    }

    useEffect(() => {
      
    },[auth]);


	return (
	<>
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
                  { authenticated == "false" || authenticated == null ? <Link to="/" className="nav-link"> Home</Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to="/about" className="nav-link">About</Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "true" ? <Link to='/dashboard' className='nav-link'>Hi {useDetails.name} </Link> : null }
                </li>
                <li className="nav-item active">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to="/blogs" className="nav-link">Blogs</Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to="/pagination" className="nav-link">Pagination</Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to='/draggable' className='nav-link'>Draggable </Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to="/counter" className="nav-link">Counter</Link> : null }
                </li>
                <li className="nav-item active">
                  { authenticated == "false" || authenticated == null ? <Link to="/contact" className="nav-link">Contact</Link> : null }
                </li>
                <li className="nav-item active">
                { authenticated == "true" ?
                  <Link to='#' className='nav-link' onClick={() => handleLogout()}>Logout</Link>
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
	 </>

	)
}

export default Header;