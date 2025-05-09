import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3009

app.use(cors())
app.get('/products', async (req, res) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  });

app.get(`/products/:id`,async(req,res)=>{
  const productId = req.params.id;
  try{
  
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  console.log(data)
  res.json(data);
  }catch(err){
    console.error(err)
  }
})

app.listen(PORT, ()=>{
    try{
        console.log(`server is running on port : ${PORT}`)
    }catch(err){
        console.log(err)
    }
})