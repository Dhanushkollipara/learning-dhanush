//import logo from './logo.svg';
import './App.css';
import ShowProducts from './ShowProducts';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import EditUsers from './EditUser';
import ShowUsers from './ShowUsers';
import EditCategory from './EditCategory';
import Navbar from './Navbar';
import React, { Suspense, lazy } from 'react';

const Addproducts = lazy(() => import('./AddProducts'));
const CategoryPage = lazy(() => import('./Category'));
const AddUsers = lazy(() => import('./AddUsers'));

function App() {
  return (
      <div className="App">
      <Router>
        <Navbar/>
        <Suspense fallback={<div>Loading admin components...</div>}>
          <Routes>
            <Route path='/editCategory' element={<EditCategory/>}/>
            <Route path="/admin/addproducts" element={<Addproducts />} />
            <Route path="/admin/addcategory" element={<CategoryPage/>} />
            <Route path="/products/:id" element={<ProductDetails />}/> 
            <Route path='/admin/addusers' element={<AddUsers/>}/> 
          </Routes>
        </Suspense>
          <Routes>
          <Route path="/Home" element={<Navbar/>} />
          <Route path="/home/showproducts" element={<ShowProducts />} />
          <Route path="/users/:userId" element={<UserDetails/>} /> 
          <Route path="/users/update/:userId" element={<EditUsers/>}/>
          <Route path="/home/showusers" element={<ShowUsers/>} /> 
          </Routes>
      </Router>
      </div>
  );
}

export default App;


