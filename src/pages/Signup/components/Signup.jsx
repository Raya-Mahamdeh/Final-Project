import React , {useState} from 'react';
import './Signup.css';
import axios from 'axios';

export default function Signup() {

  const [user,setUser]= useState({
    userName:'',
    email:'',
    password:'',
    image:'',
  });
  
  const handleChange=(e) => {
    const{name,value}= e.target;
    setUser({
      ...user,
      [name]: value
    });
  }; 
  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('userName',user.userName)
  formData.append('email',user.email);
  formData.append('password',user.password);
  formData.append('image',user.image);
  const{data}= await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);
  console.log(data);
  
  };
  const handleImageChange=(e) => {
    const{name,files}= e.target;
    setUser({
      ...user,
      [name]: files[0]
    });
  };


  const validateData = async () => {
    const RegisterSchema = object({
      userName:string().min(3).max(20).required,
      email:string().email,
      password:string().min(3).max(20).required,
      image:string().required,
    });

    try{
      await RegisterSchema.validate(user);
      return true;
    }catch(e) {
      console.log("Validation error",e.errors);
      return false;
    }
  };

  

  return (
   <>
   <form onSubmit={handleSubmit}>
   <label>User Name</label>
  <input type="text" value={user.userName} name="userName"  onChange={handleChange}/>
  <label >Email</label>
  <input type="email" value={user.email} name="email"  onChange={handleChange}/>
  <label>Password</label>
  <input type="password" value={user.password} name="password"  onChange={handleChange}/>
  <label>Image</label>
  <input type="file" name="image" onChange={handleImageChange}/>

  <button type="submit" >submit</button>
    </form>

   </>
  );
}

