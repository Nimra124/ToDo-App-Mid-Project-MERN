import React, { useEffect } from 'react'
import  { useState} from "react";
import { json, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {add_to_cart} from '../Redux/Action/Action'
import { useDispatch } from 'react-redux';


const Login = () => {


 const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [invalid,SetInvalid]=useState(false);
    const [emptyEmail,setEmptyEmail]=useState(false)
    const [emptyPassword,setEmptyPassword]=useState(false)
    const [data,setData]=useState([])

     let dispatch=useDispatch();


    let navi=useNavigate();

  const saveRecord = () =>{
   
    if(email)
    {
      setEmptyEmail(false)
    }
    else{
      setEmptyEmail(true)
    }

    if(password)
    {
      setEmptyPassword(false)
    }
    else{
      setEmptyPassword(true)
    }

    let fdata=data.find(x=>x.email==email)
   
if(fdata)
{
  if((email=== fdata.email  && password==fdata.password))
  {SetInvalid(false)
    console.log(email,password) 
    localStorage.setItem("user",JSON.stringify({email,password}))
   if(fdata)
   {
    const fdataId=fdata._id;
    dispatch(add_to_cart(fdataId))}
   navi('/home')
  }
  else{
     SetInvalid(true)
  }
}
else{
  SetInvalid(true)
}
  
  }




  const getData = async () => {
    let result = await fetch("http://localhost:5000/getuser");
    result = await result.json();
    if(result)
    {
      console.log(" result in get data login : ",result)
    }
    else
    {
      getData();
    }

    setData(result);
  
  
  };

  useEffect(()=>{
    localStorage.clear();
     getData();
  },[])
  

  return (    
    <div>


{/* 
      {
        data.map(x=>
          {
            return(<>
            
          <p> Email:  {x.email}</p>
          <p> Password : {x.password} </p>
            
            </>)
          })
      } */}

<section className="vh-10 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 txt-color text-uppercase">Login</h2>
              <p className="text-white-50 txt-color mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='email'    onChange={(e)=>setEmail(e.target.value)}      className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Email</label>
                {
                (emptyEmail)&&(<h6 className='text-danger'>Please enter Email !</h6>)
              }
              </div>
             
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" name='passward'  onChange={(e)=>setPassword(e.target.value)}  className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typePasswordX">Password</label>
                {
                (emptyPassword)&&(<h6 className='text-danger'>Please enter Password !</h6>)
              }
              </div>
                <button className="btn btn-outline-light btn-lg txt-color mt-5 px-5"  onClick={saveRecord} type="submit">Login</button>

            {(invalid)&&(<h5 className='text-danger mt-5'>You have entered invalid email or passward !</h5>)} 
            
            </div>
            <div>
            
              <p className="mb-0 txt-color">Don't have an account? <Link to="/signup" className=" text-light fs-5 fw-bold">Sign Up</Link>
              </p>
          
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

export default Login
