import React , {useState}  from 'react'
import { useNavigate } from "react-router-dom"
import Loader from '../../../components/Loader.jsx'
import axios from 'axios';
import './Catagories.css'

export default function Catagories() {
    const [searchQuery,setSearchQuery]=useState('');
    const [categories,setCategories]=useState([]);
    const [loader,setLoader]=useState(true);
    const [error,setError]=useState('');
    const getCategories = async()=>{
        try {
            const{data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=10`);
            setCategories(data.categories);       
            setError('');
        }catch (error) {
            setError('error loading categories'); 
        }finally{
            setLoader(false);
        }      
    }

useState(() =>{
    getCategories();

},[]);
const navigate = useNavigate()

const gotToNewPage=(id)=>{
  navigate(`/products/${id}`);
}
if(loader){
   return <Loader />
}

  return (
   <>
   {error??<p>{error}</p>}
    <div className='categories-container'>
    {(categories.length >0)? categories.map( categorie =>     
     <div className='categorie' key={categorie.id}>
        <h2>{categorie.name}</h2>
        <img src={categorie.image.secure_url} onClick={() => gotToNewPage(categorie.id)}/>
        <h6>{categorie.id}</h6>
     </div>):'<h2>empty prouduct</h2>'}
   </div>

   </>
  )}