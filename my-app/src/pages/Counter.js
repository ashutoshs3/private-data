import React, {useReducer, } from 'react'

 function Counter(){

 	var initialState = 0;
	const reducer = (state, action) => {
		switch(action.type){
			case "INCREMENT":
				return state + 1;
			case "DECREMENT":
				switch(state){
					case 0:
						return initialState;
					default: return state - 1;
				}
			default: return state; 
		}

	}

	//const [state, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<div className="counter-button">
			    <h1>{state}</h1>
				<button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
				<button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
			</div>
		</>
	)
}

export default Counter;