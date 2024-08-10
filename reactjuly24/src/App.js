import './App.css';
import Todo from './Todo_Component/Todo';
import Addnums from './Addnums';
import Calculator from './Calculator';
import Student from './Student';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Products from './Products';
import Gender from './Gender'
import GithubAPI from './GithubAPI';
import Menu from './Menu';
import ProductDetails from './ProductDeatils';
import Github from './Github';
import ExampleUseEffect from './ExampleUseEffect';
import Cities from './Cities';
import CityDetails from './CityDetails';
import CityNews from './CityNews';
import RefHook from './RefHookExample';
import ClassbasedCounter from './ClassbasedCounter'
import React from 'react';
import Login from './Login';
import UserMenu from './UserMenu';
import ReduxCounter from './ReduxCounter';
import ReduxTodo from './ReduxTodo';
import EditTodo from './EditTodo';

function App() {
  const Login_Url = "http://ascendion.com/login";
  const login_attempts = 5;

  let [data,setData] = useState([]);
  let [show,setShow] = useState(true);
  useEffect(function(){
    axios
    .get("https://fakestoreapi.com/products")
    .then(function(response){
        setData(response.data);
        
        /* let uniqueCat = ['All', ...new Set(response.data.map(function(val) { return val.category}))];
        setCategories(uniqueCat);
        console.log(categories); */
    }).catch(function(error){
        console.log(error);
    })
},[]); 

  function greet(){
    alert("Have a great Day!");
  }

  let menu_data = [
    {title:"Home", path:"/"},
    {title:"Hobby", path:"/Hobby"},
    {title:"Login", path:"/Login"}
  ]


  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReduxTodo />} >
        <Route path=":index" element={<EditTodo />} />
        </Route>
      </Routes>
      </BrowserRouter>
            {/* {loggedIn ? (
                <UserMenu setLoggedIn={setLoggedIn} />
            ) : (
                <Login setLoggedIn={setLoggedIn} />
            )}

      {/* show var = {show}<br/>
      <select 
      onChange={(e) => {
        e.target.value == "show" ? setShow(true) : setShow(false);
      }}>
        <option value="show">Show</option>
        <option value="hide">Hide</option>
      </select>

      <BrowserRouter>
      {show ? <Menu menu_data={menu_data}/> : " "} */}
        {/* <ExampleUseEffect/> */}
        {/* <RefHook/> */}
        {/* <ClassbasedCounter/> */}
      {/* <BrowserRouter>
        <header >
         <h1> React Assignment </h1>
        </header>
          {/* <Link to="/Hobby/Hobbies Page/1"> Hobby </Link> 
          <Link to="/Addnums/Adding Numbers/2"> Addnums </Link> 
          <Link to="/Calculator/Calculator/3"> Calculator </Link> 
          <Link to="/Student/Student Details/4"> Student  </Link>
            

          <br></br>*/}
          
          {/* <Link to="/products"> <button> Show Products </button>  </Link>

          <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path="/:category/" element={<Products data={data}/>}/>
            <Route path="/:category/:id" element={<ProductDetails data={data}/>}/>
          </Routes>  
          <Routes>
            <Route path='/cities/' element={<Cities/>}>
            <Route path=':name/' element={<CityDetails/>}>
              <Route path='news' element={<CityNews newsText="This is news test"/>}/>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter> */}
      </div>
  );
}

export default App;

// import MUIspacing from './MUIspacing';
// import AutoGrid from './AutoGrid';
// import BasicGrid from './BasicGrid';
// import ComplexFluidGrid from './ComplexFluidGrid';
// import FeaturedPost from './FeaturedPost';
// import MainFeaturedPost from './MainFeaturedPost';
// import NestedGridGroup from './NestedGridGroup';


// function App(){
//   return (
//     <>
//     <MUIspacing/>
//     <AutoGrid/>
//     <BasicGrid/>
//     <ComplexFluidGrid/>
//     <NestedGridGroup/>
//     </>
//   )
// }

// export default App;
