import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Product';

import Test from './components/Test';
import Test2 from './components/Test2';
function App() {
  return (

   <BrowserRouter>
   <div className="App">
    <Header/>
     {/* <Test2/>
    <Test/>  */}
   
    <Routes>

          <Route path='/' element={<Product />} />

        </Routes>
    </div> 
  </BrowserRouter>
   
  );
}

export default App;
