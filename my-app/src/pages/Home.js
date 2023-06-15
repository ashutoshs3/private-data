import React, { useState, useEffect } from 'react';
import axios from "axios";
import content from "./fields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// const schema = yup.object().shape({
//   //fullname: yup.string().required("Full name is required field"),
//   email: yup.string().required("Email is required field"),
//   password: yup.string().required("Password is required field").min(5),
// });
//const baseURL = "php-api-with-react/login.php/login";
//const getUrl = "php-api-with-react/getdata.php/getdata";

function Home(){

	// const [post, setPost] = useState([]);
	// const [search, setSearch] = useState("");

	// const getsearchUrl = "php-api-with-react/getsearchdata.php/getsearchdata?search="+search;

	// const { register, handleSubmit, formState: { errors } } = useForm({
	// 	resolver: yupResolver(schema),
	// });

	// const onSubmit = (data) => {

	// 	const info = {
	// 		email : data.email,
	// 		password : data.password,
	// 	};

	//     axios.post(baseURL, info).then((response) => {
	//     	response = JSON.parse(response);
	//        // console.log(response.data);
	//         setPost(response.data);
	//     });

	// }

	// const onSearch = (event) => {

	// 		setSearch(event.currentTarget.value);
	// }

	/*axios.get(getsearchUrl).then((response) => {
	      setPost(response.data);
	    });*/

	 // useEffect(() => {
	 //    axios.get(getsearchUrl).then((response) => {
	 //    	//console.log(response);
	 //        setPost(response.data);
	 //    });
	 //  }, [search]);



	 //console.log(post,'xdfkfd');

    return(
 		<div className="container mt-4 mb-4">
 			<h1 className="homepage-heading">React Ecommerce</h1>
		</div>
 	)
}

export default Home;