import React , {useState} from 'react'
import axios from 'axios';
import './Catagories.css'
export default function Catagories() {
   const [searchQuery,setSearchQuery]=useState('');
    const[categories,setCategories]=useState([]);

    const getCategories = async()=>{
        const{data}= await axios.get('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
        setCategories(data.categories);
        console.log(data);
    }

useState(() =>{
    getCategories();

},[]);


  return (
   <>
  <div className='categories-container'>
    { categories.map( categorie =>
     
     <div className='categorie' key={categorie.id}>
        <h2>{categorie.name}</h2>
        <img src={categorie.image.secure_url}/>
     </div>
     
     )}
    </div>
   </>
  )
}
