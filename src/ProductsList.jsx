import { useEffect, useState, createContext } from "react";


function ProductsList(){
    const ProdcutsContext = createContext(setData);
    const [Data, setData] = useState([]);
    const [add, setAdd] = useState([])
    const myBtn =(id)=>{
      if(!add.includes(id)){
        setAdd([...add,id])
      }
    }
    useEffect(()=>{
      async function fetchData() {
        try{
        const response = await fetch('http://localhost:3009/products')
        const Json = await response.json();
        setData(Json.products)
        console.log(Json.products)
        }catch(err){
          console.log(err);
        }
      }
      fetchData()
    },[])
   return(<>
   <p className=''>Hello World!</p>
   <div className='grid grid-cols-3'>
    {Data.map(item=>{
      return(
        <div key = {item.id} >
          <div>
            <Link to={`/Products/${item.id}`}>
            <img src={item.thumbnail} alt={item.title}/></Link>
            <h2>
              <Link to={`/Products/${item.id}`}>{item.title}</Link>
            </h2>
            <p>{item.price}</p>
            <button onClick={()=>myBtn(item.id)}>
              {add.includes(item.id) ? 'added':'add'}
              </button>
          </div>
        </div>
      )
    })}
   </div>
   </>)
  }