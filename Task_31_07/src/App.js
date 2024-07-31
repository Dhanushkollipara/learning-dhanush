import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

             

           {/* <Route path="/" element={<ShowProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} /> */}
          {/* <Routes> */}
          {<ShowCategory/>} 
          {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
