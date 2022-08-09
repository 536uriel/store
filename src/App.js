
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './conponents/login';
import MyProducts from './conponents/my-products';
import {Products} from './conponents/products';
import HomePage from './conponents/home-page';
import Navbar from './conponents/navbar';
import Cart from './conponents/cart';
import { AuthGard } from './authGard';
import './App.css'
import {useState,useEffect} from 'react'


function App() {


  const [products,setProducts] = useState([])

  const [cart,setCart] = useState([])

  useEffect(()=>{
    // fetch('http://localhost:1000/products',{
    //   method:"GET"
    // }).then(res => res.json()).then((products) => {
    //   setProducts(products)
    //   console.log(products)
    // })

    //for testing
    setProducts([
      {
        _id:1,
        name:"banana",
        price:11
        
      },
      {
        _id:2,
        name:"avocado",
        price:11
        
      },
      {
        _id:3,
        name:"apple",
        price:11
        
      },
      {
        _id:4,
        name:"orange",
        price:11
        
      }
    ])



  },[])
  
  return (
    <Router>
      <div className="App">

      <Navbar></Navbar>

        <Routes>

          

          <Route path='/login' element={<Login />}/>
          <Route path='/' exact element={<HomePage />}/>


          <Route element={<AuthGard />} >
          <Route path='/MyProducts' element={<MyProducts />}/>
          <Route path='/products' element={<Products products={products} cart={cart} setCart={setCart} />}/>
          <Route path='/cart' element={<Cart cart={cart} />}/>
          </Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
