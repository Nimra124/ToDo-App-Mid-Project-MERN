import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const auth = localStorage.getItem('user')
 const navigate=useNavigate();
 const[check,setCheck]=useState(true);
const [name,setName]=useState("")



//  let id=useSelector(st=> st.cartreducer);
//  const getData=async()=>{
 
//    let result= await fetch(`http://localhost:5000/updateuser/${id}`)
//   result=await result.json();
//   console.log(result);
//   setName(result.name);
//  }











   const logout =()=>
   {
    localStorage.clear();
    navigate('/');
     if(check==true)
     {
      setCheck(false)
     }
     else{
      setCheck(true)
     }

   }

  useEffect(()=>{
    if(auth){
      navigate('/home')
    }
   
},[])

  useEffect(()=>{
  
    
    navigate('/')
  
  
  
  },[check])

  return (

  

    <div>
      
      {
        (auth)?(<>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <Link to="/home" className="navbar-brand fs-4  me-2" >Grocery List </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active mx-2 " aria-current="page" >View Item List</Link>
        </li>
        <li className="nav-item">
          <Link to="/input" className="nav-link active mx-2" aria-current="page" >Add Item</Link>
        </li>


        <li className="nav-item">
          <Link to='/update' className="nav-link active mx-2" aria-current="page" >Edite Details</Link>
        </li>

        <li className="nav-item">
          <Link onClick={logout} className="nav-link active mx-2" aria-current="page" >Logout</Link>
        </li>



        <li className="nav-item">
          <a  className="nav-link active me-2" aria-current="page" >{name}</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

        
        </>) :
        (<>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <Link to="/home" className="navbar-brand fs-4  me-2" >Grocery List </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
  </div>
</nav>

        
        
        </>)
      }
  
    
    </div>
  )
}

export default Navbar;
