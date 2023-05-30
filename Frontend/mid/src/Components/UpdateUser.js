import React from 'react'
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const UpdateUser  = () => {

    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")



    let id=useSelector(st=> st.cartreducer);
   


    const saverecord=async(e)=>
    {
      e.preventDefault();
     if(id)
     {
        let result= await fetch(`http://localhost:5000/putuser/${id}`,{
          method: "PUT",
          body: JSON.stringify({name,address,email,password}),
          headers:{
            "Content-Type":"Application/json"
          }
        })
           result=await result.json();
        
           if(result)
           {
             navi("/home")
           }
        
          }
      
    
    }
  
    



    const navi=useNavigate();

    const getData=async()=>{
 
     let result= await fetch(`http://localhost:5000/updateuser/${id}`)
     result=await result.json();
     console.log(result);
      setName(result.name);
      setAddress(result.address);
      setEmail(result.email);
      setPassword(result.password)
   
    }
 
 
   useEffect(()=>{
    if(id)
    {
      getData();
    }
    
   },[])
 
   




    
  return (    
    <div>


<section className="vh-10 gradient-custom">
  <div className="container txt-color py-5 h-100 w-100">
    <div className="row d-flex justify-content-center align-items-center h-100 w-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-2 pb-5">
              <h2 className="fw-bold mb-5 txt-color mt-3 text-uppercase">Update</h2>

              <div className="form-outline form-white mb-4">
                <input type="Name" id="typeEmailX" name='name' value={name} onChange={(e)=>setName(e.target.value)}    className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Name</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="Name" id="typeEmailX" name='address' value={address} onChange={(e)=>setAddress(e.target.value)}    className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Address</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='email' value={email}    onChange={(e)=>setEmail(e.target.value)}  className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" name='passward' value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typePasswordX">Password</label>
              </div>
              <button className="btn btn-outline-light txt-color btn-lg mt-5 px-5" onClick={saverecord} type="submit">Update</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default UpdateUser;
