// import './App.css';
// //import Login from './component/Login/Login.js';
// import Menu from './component/Menu/Menu.js';
//  //import Login from './component/Login/Login.js';
// // import Footer from './component/Footer/Footer.js';
// // import Container from './component/Container/Container.js';
// // import Counter from './component/Counter/Counter.js';
// // import Calculate from './component/Calculate/Calculate.js';
// // import Funcalculator from './component/Funcalculator/FunCalculator.js'
// // import Student from './component/Student/Student.js'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import Todo from './component/Todo/Todo.js';
// //import GetAllProducts from './component/GetAllProducts/GetAllProducts.js'
// //import GenderDetector from './component/GenderDetector/GenderDetector.js';
// import GetAllProducts from './component/GetAllProducts/GetAllProducts.js';
// //import Products from './Products.js'
// //import GithubUserlist from './component/GithubUserslist/GithubUserlist.js'
// import TodoDetails from './component/Todo/TodoDetails.js'
// import TodoDetailsEdit from './component/Todo/TodoDetailsEdit.js';
// import Categories from'./component/GetAllProducts/Categories.js'
// import Details from './component/GetAllProducts/Details.js'
// function App() {
//   const MenuData = [
//     {title: "Menu",path:"/menu"},
//     {title: "Home",path:"/home"},
//     {title: "Contact",path:"/contact"},
//     {title: "Address",path:"/address"}
//   ]
//   const LOGIN_URL = "http://ascendion.com/login"
//   const LOGIN_ATTEMPTS  = 5;
//   function greet(){
//     alert("Welcome! Have a great day!")
  
//   return (
//     <div className="App clearfix">
//       <BrowserRouter>
//       <div className="button-container">
//         <Link to="/Gender" className="button gender">Show Gender</Link>
//       </div>
//       <div className="button-container">
//         <Link to="/GetAllProducts" className="button products">GetAllProducts</Link>
//       </div>
//       <div className='button-container'>
//         <Link to="/Category">Categories</Link>
//       <Routes>
//       <Route path="/Category" element={<Categories />} />
//       </Routes>
//       </div>
//       <Link to="/todo">todo</Link>
//         <Routes>
//           <Route path='/todo' element={<Todo/>}/>
//           <Route path='/todo/:id' element={<TodoDetails/>}/>
//           <Route path='/todo/:id/edit' element={<TodoDetailsEdit/>}/>
//       </Routes>
//       </BrowserRouter>
//       {/* <GithubUserlist /> */}
//       <Menu MenuData={MenuData}/>
//     </div>
//   );
// }
// }

// export default App;

// import './App.css';
// import Login from './component/LoginMenu/Login';
// import UserMenu from './component/LoginMenu/UserMenu';
// import { useState } from 'react';
// function App(){
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };
//   return(
//     <div>
//       {isLoggedIn ? (
//         <>
//           <UserMenu onLogout={handleLogout} />
//         </>
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   )
// }
// export default App;



// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navbar from './component/Products/Navbar/Navbar';
// import DProducts from './DProducts'
// function App() {
//   return(
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//       <Route path='/' element={<DProducts />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;

// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navbar from './component/Products/Navbar/Navbar';
// // import UserDetails from './component/DisplayandDelete/UserDetails';
// // import AddUsers from './component/DisplayandDelete/AddUsers'
// // import ShowUsers from './component/DisplayandDelete/ShowUsers';
// // import RoleForm from './component/DisplayandDelete/RoleForm';
// // import CartPage from './component/ASC_Store/CartPage';
// // import ProductsAPI from './component/ASC_Store/ProductsAPI';
// // import AdminPage from './component/ASC_Store/AdminPage';
// // import Cities from './component/NestedRouting/Cities'
// // import CityDetails from './component/NestedRouting/CityDetails';
// // import CityNews from './component/NestedRouting/CityNews';
// // import RefHook from './component/Hooks/RefHook';
// // import ClassBasedCounter from './component/Hooks/ClassBasedCounter';
// // import AddCatergory2 from './component/Products/AddCategory/AddCategory2'
// import AddProdcuts from './component/Products/AddProducts/AddProducts'
// // import ProductDetails from './component/Products/Details/Details'
// // import Home from './component/Products/Home/Home';
// // import OrderDetails from './component/ASC_Store/OrderDetails';
// import ShowProducts from './component/Products/ShowProducts/ShowProducts';
// // import RegistrationForm from './component/RegistrationForm/RegistrationForm';
// import LazyHome from './component/LazyLoading/LazyHome';
// function App() {
//   return (  
//     <div>
//     <BrowserRouter>
//         <Navbar />
//         <Routes>
          
//           {/* <Route path='/cart' element={<CartPage />}/>
//           <Route path="/Products" element={<ProductsAPI />} />
//           <Route path="/AdminPage" element={<AdminPage />}>
//         <Route path=":orderId" element={<OrderDetails />} />
//       </Route> */}
//           {/* <Route path='/cities' element={<Cities />}>
//             <Route path=':name/' element={<CityDetails />}>
//                 <Route path='news' element = {<CityNews newstext={"Today's News"}/>}/>
//           </Route>
//           </Route> */}
//           {/* <Route path='/RefHook' element={<RefHook />}/>
//           <Route path='/ClassBased' element= {<ClassBasedCounter />}/>
//           <Route path='/users' element={<AddUsers />}/>
//           <Route path='/Userdetails/:userId' element={<UserDetails />}/>
//           <Route path='/RoleForm' element={<RoleForm />}/>
//           <Route path='/ShowUsers' element={<ShowUsers />}/>
//           <Route path='/AddCategory' element={<AddCatergory2 />}/> */}
//           <Route path='/AddProducts' element={<AddProdcuts />}/>
//           {/* <Route path='/Details' element={<ProductDetails />}/>
//           <Route path='/CategoryList' element={<Home />}/> */}
//           <Route path='/ShowProducts' element={<ShowProducts />}/> 
//           <Route path='/ShowProducts/:id' element={<ShowProducts />}/>
//           {/* <Route path='/Registration' element={<RegistrationForm />}/>  */}
//           <Route path='/Lazy' element={<LazyHome />}/>  
//         </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import LoginForm from './component/LoginAuthorization/LoginForm';
// import LogoutButton from './component/LoginAuthorization/LogoutButton';
// import AuthActions from './component/LoginAuthorization/AuthActions';

// const App = () => {
//     const { isAuthenticated } = AuthActions();
//     const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

//     useEffect(() => {
//         if (isAuthenticated) {
//             setShowWelcomeMessage(true);
//             const timer = setTimeout(() => {
//                 setShowWelcomeMessage(false);
//             }, 3000);
//             return () => clearTimeout(timer);
//         } else {
//             setShowWelcomeMessage(false);
//         }
//     }, [isAuthenticated]);

//     return (
//         <div>
//             {isAuthenticated ? (
//                 <>
//                     <LogoutButton />
//                     {showWelcomeMessage && <p className="success">Welcome back! You are logged in.</p>}
//                 </>
//             ) : (
//                 <LoginForm />
//             )}
//         </div>
//     );
// };

// export default App;


// import './App.css'
// import ReduxCounter from './ReduxCounter/ReduxCounter';
// import Countreducers from './Reducers/Countreducers';
// import ReduxTodo from './ReduxTodo/ReduxTodo';
// import EditTodo from './ReduxTodo/EditTodo';
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import UseMemoHook from './component/Hooks/UseMemoHook';
// import CustomHookUser from './component/Hooks/CustomHookUser';
// import Profile from './component/UserContext/Profile';
// import Todo from './component/Todo/Todo'
// import JwtDecode from './component/JWT_Decode/JwtDecode';
// function App(){
//   return(
//     <BrowserRouter>
//       <Link to ='/CountReducers'>Count</Link>
//       <Link to='/ReduxCounter'>Counter</Link>
//       <Link to='/ReduxTodo'>Todo</Link>
//       <Link to='/profile'>Profile</Link>
//       <Routes>
//         <Route path='/CountReducers' element={<Countreducers />}/>
//         <Route path='/ReduxCounter' element={<ReduxCounter />}/>
//         <Route path="/*" element={<ReduxTodo />} />
//         <Route path='/EditTodo' element={<EditTodo />}/>
//         <Route path='/UseMemo' element={<UseMemoHook />}/>
//         <Route path='/CustomHookUser' element={<CustomHookUser />}/>
//         <Route path='/Profile' element={<Profile />}/>
//         <Route path='/Todo' element={<Todo />}/>
//         <Route path='/JwtDecode' element={<JwtDecode />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;

// import DataTable from 'react-data-table-component';
// import styled from 'styled-components';

// const StyledContainer = styled.div`
//   padding: 20px;
//   background-color: #f0f0f0;
// `;

// const data = [
//   { id: 1, name: 'sreekar', age: 21 },
//   { id: 2, name: 'dhanush', age: 22 },
//   { id: 3, name: 'vamsi', age: 23 },
// ];

// const columns = [
//   { name: 'Name', selector: row => row.name, sortable: true },
//   { name: 'Age', selector: row => row.age, sortable: true },
// ];

// function App() {
//   return (
//     <StyledContainer>
//       <h1>React Data Table Example</h1>
//       <DataTable
//         columns={columns}
//         data={data}
//       />
//     </StyledContainer>
//   );
// }

// export default App;






// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Flipkart/Navbar';
// import { Container } from '@mui/material';

// import ShowProducts from './Flipkart/Home/ShowProducts';
// import ShowCategories from './Flipkart/Home/ShowCategories';
// import ShowUsers from './Flipkart/Home/ShowUsers';

// const AddProducts = lazy(() => import('./Flipkart/Admin/Addproducts'));
// const AddCategory = lazy(() => import('./Flipkart/Admin/AddCategories'));
// const AddUsers = lazy(() => import('./Flipkart/Admin/AddUsers'));
// const AddRole = lazy(() => import('./Flipkart/Admin/AddRoles'));


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Container>
//         <Suspense fallback={<div>Loading admin components...</div>}>
//           <Routes>
//             <Route path="/admin" element={<div>Admin Dashboard</div>} />
//             <Route path="/admin/addproducts" element={<AddProducts />} />
//             <Route path="/admin/addcategory" element={<AddCategory />} />
//             <Route path="/admin/addusers" element={<AddUsers />} />
//             <Route path="/admin/addrole" element={<AddRole />} />
//           </Routes>
//         </Suspense>

//         <Routes>
//           <Route path="/home" element={<div>Home Dashboard</div>} />
//           <Route path="/home/showproducts" element={<ShowProducts />} />
//           <Route path="/home/showcategories" element={<ShowCategories />} />
//           <Route path="/home/showusers" element={<ShowUsers />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// }

// export default App;



// import React, { useMemo } from 'react';
// import ReactDOM from "react-dom";

// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Header from './component/assignmentAug21_Hooks/Header'
// import UseMemoHookExample from './component/assignmentAug21_Hooks/UseMemoHook';
// const NumberContext = React.createContext();
// const App = () => {
  // return (
  //   <NumberContext.Provider value={42}>
  //   <div>
  //   <Display />
  //   </div>
  //   </NumberContext.Provider>
  //   );
    
  //   }
  //   function Display() {
  //   return (
  //   <NumberContext.Consumer>
  //   {value => <div>The answer is {value}.</div>}
  //   </NumberContext.Consumer>
  //   );
//   return (
//     <Router>
//       <Routes>
//         <Route path="/header" element={<Header />} />
//         <Route path="/memohook" element={<UseMemoHookExample />} />
//       </Routes>
//     </Router>
//   );
// };
// // ReactDOM.render(<App />, document.querySelector("#root"));
// export default App;

import Task from './Assigmentaug25/components/Task';
import TaskList from './Assigmentaug25/components/TaskList';
import Form from '../src/Assigmentaug25/Form';
import Home from '../src/Assigmentaug25/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
import Textfield from '../src/Assigmentaug25/Textfield';
function App() {
  return (
    <>
    <Textfield/>
  <Router>
  <div className="App">
  <>
  <Routes>
  <Route path='/login' element={<Form title="Login" />} />
  <Route path='/register' element={<Form title="Register" />} />
  <Route path='/home' element={<Home />}/>
  </Routes>
  </>
  </div>
  <Task />
  <TaskList/>
  </Router>
  </>
  );
  }
export default App;