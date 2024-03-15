import React,{useState}  from 'react';
import './Login.css';
import {object,string} from 'yup';

export default function Login() {

  const [user,setUser]= useState({
    email:'',
    password:'',
  });
  const [errors,setErrors]=useState([]);
  const handleChange=(e) => {
    const{name,value}= e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const handleSubmit =async (e) => {
  e.preventDefault();
  if(await validateData()){ console.log(user);}
  
  };
  const validateData = async () => {
    const RegisterSchema = object({
      email:string().email(),
      password:string().min(3).max(20).required(),
    });

    try{
      await RegisterSchema.validate(user,{abortEarly:false});
      return true;
    }catch(e) {
      //console.log("Validation error",e.errors);
      setErrors(e.errors);
      return false;
    }
  };

  return (
   <>
   {errors.length > 0?errors.map(error=>
   <p>{error}</p>
   ):''}
   <form onSubmit={handleSubmit}>
  <label >Email</label>
  <input type="email" value={user.email} name="email"  onChange={handleChange}/>
  <label>Password</label>
  <input type="password" value={user.password} name="password"  onChange={handleChange}/>
  
  <button type="submit" >submit</button>
    </form>

   </>
  );
}

