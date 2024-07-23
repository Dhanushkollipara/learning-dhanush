import './App.css';
import Hobby from './Hobby';
import Addnums from './Addnums';
import Calculator from './Calculator';
import Student from './Student';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Products from './Products';
import Gender from './Gender'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header >
         <h1> React Assignment </h1>
        </header>
          {/* <Link to="/Hobby/Hobbies Page/1"> Hobby </Link> 
          <Link to="/Addnums/Adding Numbers/2"> Addnums </Link> 
          <Link to="/Calculator/Calculator/3"> Calculator </Link> 
          <Link to="/Student/Student Details/4"> Student  </Link>
            

          <br></br>
          <Routes>
            <Route path="/Hobby/:title/:id" element={<Hobby/>}/>
            <Route path="/Addnums/:title/:id" element={<Addnums/>}/>
            <Route path="/Calculator/:title/:id" element={<Calculator/>}/>
            <Route path="/Student/:title/:id" element={<Student/>}/>
          </Routes> */}
          <Link to="/Gender"> Show Gender </Link> 
          <Link to="/Products"> Show Products  </Link>

          <Routes>
            <Route path="/Gender" element={<Gender/>}/>
            <Route path="/Products" element={<Products/>}/>

          </Routes>          


          
      </BrowserRouter>
    </div>
  );
}

export default App;
