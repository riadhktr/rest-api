import './App.css';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import { Routes,Route} from "react-router-dom";
import Description from './components/Description';




function App() {

  


  return (
    
    <div className="App">
      <Navigation/>
    
      <Routes>
        
        <Route path='/products' element={<ProductList/>}/> 
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='/description/:id'  element={<Description/>}/>
      </Routes>
      
     
      
      
    </div>

    
  );
}

export default App;
