import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import CartImg from './assets/cart.svg' 
import Cart from './Cart.jsx'
import {ProductsList} from './ProductsList.jsx'
 
function App() {
  
  return(
    <Router>
      <div className='w-full flex flex-row justify-between p-10 bg-amber-300'>
      <ul>
        <li><Link to='/Dummy'>Home</Link></li>
        <li><Link to='/Products'>Product page</Link></li>
      </ul>
      <Link to='/cart'>
      <div className=''>
      <img src={CartImg} alt='cartlogo' className='w-10 ' />
      </div>
      </Link>
      </div>
      <Routes>
        <Route> </Route>
        <Route path='/Products' element = {<ProductsList/>}>
        </Route>
        <Route path="/Products/:id" element = {<ProductPage/>}>
        </Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
      </Routes>
    </Router>
  )
}




function ProductPage(){
  const params = useParams();
  const [Data, setData] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:3009/products/${params.id}`)
      const result = await response.json();
      setData(result)
    }
    fetchData()
  },[params])
  return(
    <>
    <div>
          <div key= {Data.id}>
            <img src={Data.thumbnail} alt= {Data.title}/>
            <h2>{Data.title}</h2>
            <p>{Data.description}</p>
          </div>
    </div>
    </>
  )
}

export default App
