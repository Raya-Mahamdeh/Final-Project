import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import Loader from '../../../components/Loader.jsx'
import axios from 'axios';

export default function Products() {
  const { id } = useParams();
  console.log(id);

    const [products,setProducts]=useState([]);
    const [loader,setLoader]=useState(true);
    const [error,setError]=useState('');
    const getProducts = async()=>{
        try {
            const{data}= await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${id}`);
            setProducts(data.products);  
            console.log(data.products);     
            setError('');
        }catch (error) {
            setError('error loading products'); 
        }finally{
            setLoader(false);
        }      
    }

useState(() =>{
  getProducts();

},[]);



if(loader){
   return <Loader />
}

  return (
   <>
   {error??<p>{error}</p>}
    <div className='products-container'>
    {(products.length >0)? products.map( product =>     
     <div className='product' key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.mainImage.secure_url}/>
     </div>):'<h2>empty prouduct</h2>'}
   </div>

   </>
  )}
