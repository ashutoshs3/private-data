import {useState, useEffect} from 'react'
function Contact(){
	const [count, setCount] = useState(0);

	// const fetchData = () => {
 //      fetch('http://localhost:8000/products')
 //      .then((res) => res.json())
 //      .then((datas) => setData(datas));
 //    };

 //  useEffect(() => {
 //    fetchData();
 //  }, []);

  //console.log("Get Data =>", data);

  const increment = () => {
  		setCount(count=> count+1);
  }

  const decrement = () => {
  	  if(count <= 0){
  	  	return
  	  }
  		setCount(count=> count-1);
  }

	return (
		<>
			<div className="container mt-4 mb-4">
				<h1 className="homepage-heading">Contact page</h1>
			</div> 
			{/*<div>{count}</div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>*/ }
		</>
	)
}

export default Contact;