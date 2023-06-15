import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Details from './pages/Details';
import Pagination from './pages/Pagination';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Dashboard from './admin/Dashboard';
import Sample from './admin/pages/SamplePage';
import LeftSidebar from './admin/partials/LeftSidebar';
import Draggable from './pages/Draggable';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
             <Route index element={<Home />} />
             <Route exact path="/about" element={<About />} />
             <Route exact path="/shop" element={<Shop />} />
             <Route exact path="/cart" element={<Cart />} />
             <Route exact path="/blogs" element={<Blog />} />
             <Route exact path="/pagination" element={<Pagination />} />
             <Route exact path="/counter" element={<Counter />} />
             <Route exact path="/contact" element={<Contact />} />
             <Route exact path="/login" element={<Login />} />
             <Route exact path="/register" element={<Registration />} />
             <Route exact path="/order" element={<Order />} />
             <Route exact path="/product/details/:id" element={<Details />} />
             <Route exact path="/draggable" element={<Draggable />} />
          <Route path="/" element={<LeftSidebar />}>
             <Route exact path="/dashboard" element={<Dashboard />} />
             <Route exact path="/sample" element={<Sample />} />
          </Route>
          </Route>
          

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

 
