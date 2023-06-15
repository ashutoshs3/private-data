import React, { useState, useEffect, useRef } from 'react'
//import Data from "./Data"
import { addToCart } from '../redux/action'
import { productList } from '../redux/productAction'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';


function Shop() {

	 const dispatch = useDispatch();
	 const navigate = useNavigate();
	 const data = useSelector((state) => state.productData);
   const datas = useSelector((state) => state.productDataSearch);
   const dragItem = useRef();
   const dragOverItem = useRef();
   const [list, setList] = useState(data);

	 useEffect(() => {

	    // axios.get('http://localhost:8000/products').then((response) => {
	    // 	  console.log(response.data);
	    //     setData(response.data);
	    // });
	    dispatch(productList());

	  }, []);

	 	 //    let fetchRes = fetch('http://localhost:8000/products');
    // // fetchRes is the promise to resolve
    // // it by using.then() method
    // fetchRes.then(res =>
    //     res.json()).then(d => {
    //         setData(d)
    //     })
		

	  console.log('data on shop page', list);

	  const goToDetails = (id)=> {
	  		navigate('/product/details/'+id, {state:id});
	  }

	  const dragStart = (e, position) => {
	  	console.log("drag list",list);
		    dragItem.current = position;
		    console.log("dragStart",e.target.innerHTML);
		 };

		 const dragEnter = (e, position) => {
		 	  console.log("drag enter", position);
		    dragOverItem.current = position;
		    console.log(e.target.innerHTML);
		  };

	 		const drop = (e) => {
	 			console.log("drop");
	 			console.log("list",list);
		    const copyListItems = [...list];
		    //console.log("dragItem",dragItem.current);
		    //console.log("copyListItems",copyListItems);
		    const dragItemContent = copyListItems[dragItem.current];
		    console.log("dragItemContent",dragItemContent);
		    // copyListItems.splice(dragItem.current, 1);
		    // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
		    dragItem.current = null;
		    dragOverItem.current = null;
		    setList(copyListItems);
		  };
     

	return( 
		<>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>
 	<section className="u-align-center u-clearfix u-section-2" id="sec-653a">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2 className="u-custom-font u-text u-text-palette-1-base u-text-1">Limited-Time Offers</h2>
        <div className="u-expanded-width u-list u-repeater u-list-1">
        { data && data.map((product, index) => (
          <div 
          key={index} 
          className="u-container-style u-list-item u-palette-2-light-3 u-repeater-item u-video-cover u-list-item-1" 
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <img alt={product.image} className="u-expanded-width u-image u-image-default u-image-1" onClick={() => goToDetails(product.ID)} src={"/images/" + product.image}/>
              <div className="u-align-center u-container-style u-expanded-width u-group u-group-1">
                <div className="u-container-layout u-valign-top u-container-layout-2">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-2" onClick={() => goToDetails(product.ID)}>{product.name}</h4>
                  <h6 className="u-text u-text-3">{product.currency}{product.price}</h6>
                  <a onClick={() => dispatch(addToCart({id:index+101,image:product.image,name:product.name,quantity:product.quantity,currency:product.currency,price:product.price})) } className="u-btn u-btn-rectangle u-button-style u-none u-text-palette-1-base u-btn-1">add to cart</a>
                </div>
              </div>
            </div>
          </div>
         ))}
        </div>
      </div>
    </section>
		</>
	)
}

export default Shop;