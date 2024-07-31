import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';
import AddCategory from './AddCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

             
            
           <Link to="/Category"><button>ShowCategory</button></Link>
          <Routes>

          <Route path="/admin/addCategory" element={<AddCategory />} />
          <Route path="/Category" element={<ShowCategory/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
