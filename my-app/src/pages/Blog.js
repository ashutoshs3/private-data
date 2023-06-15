import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function users(id, name, email, phone){
	return {id, name, email, phone}
}

const rows = [
	users(1, 'Ashutosh Sharma', 'ashutoshs3@chetu.com', 9854215478),
	users(2, 'Jasmin', 'jasmin@chetu.com', 9685744587),
	users(3, 'Komal Singh', 'komals2@chetu.com', 8745874589),
	users(4, 'Jeff Ros', 'jeffr3@chetu.com', 9658748596),
	users(5, 'Samantha sen', 'samanthas4@chetu.com', 3265214525)
];

function Blog(){

	const data =  useSelector((state) => state.productData);
	console.log("data from API => ", data);

	const dispatch = useDispatch();
	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{rows.map((user) => (
						<TableRow>
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell>Edit</TableCell>
						</TableRow>
				  ))}
					</TableBody>
				</Table>
			</TableContainer>
			<Button 
			onClick={()=>dispatch(productList('Hello'))} 
			size="large" 
			color="primary" 
			variant="contained">
			Click Me
			</Button>
		</>
	)
}

export default Blog;