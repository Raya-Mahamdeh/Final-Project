import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'

export default function Profile() {
  const {id} = useParams();
  const navigate = useNavigate();
  navigate('/home');
  return (
   
    <div>Profile {id}</div>
  )
}
