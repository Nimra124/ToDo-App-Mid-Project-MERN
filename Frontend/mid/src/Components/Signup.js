import React from 'react'
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




const Signup = () => {
    const navi=useNavigate();
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error1,setError1]=useState(false)
    const [error2,setError2]=useState(false)
    const [error3,setError3]=useState(false)
    const [error4,setError4]=useState(false)
    const [data,setData]=useState([])
    const [already,setAlredy]=useState(true)

    const saverecord=async()=>
    {

        if(name )
    {
      setError1(false)
    }
    else{
      setError1(true)
    }
    if(address)
    {
      setError2(false)
    }
    else{
      setError2(true)
    }
    if(email )
    {
      setError3(false)
    }
    else{
      setError3(true)
    }
    if(password )
    {
      setError4(false)
    }
    else{
      setError4(true)
    }

    let fdata=data.find(x=>x.email==email)
    if(fdata)
    {
        setAlredy(false)
    }
    else{
        setAlredy(true);
    }
    
    if(name,email,address,password,!fdata)
    {
        let result= await fetch("http://localhost:5000/user",{
            method: "Post",
            body: JSON.stringify({name,address,email,password}),
            headers:{
              "Content-Type":"application/json",
            }
          })
          result =await result.json();
          console.log("result : ",{result})
  
        
      navi("/")
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
         getData();
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
              <h2 className="fw-bold mb-5 txt-color mt-3 text-uppercase">SIGN UP </h2>

              <div className="form-outline form-white mb-4">
                <input type="Name" id="typeEmailX" name='name'  onChange={(e)=>setName(e.target.value)}    className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Name</label>
                {(error1)&&(<h5 className='text-danger  mb-4 text-center'> Please enter name....</h5>)}

              </div>
              <div className="form-outline form-white mb-4">
                <input type="Name" id="typeEmailX" name='address'    onChange={(e)=>setAddress(e.target.value)}   className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Address</label>
                {(error2)&&(<h5 className='text-danger  mb-4 text-center'> Please enter address....</h5>)}

              </div>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" name='email'   onChange={(e)=>setEmail(e.target.value)}    className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typeEmailX">Email</label>
                {(error3)&&(<h5 className='text-danger  mb-4 text-center'> Please enter email....</h5>)}
                {(!already)&&(<h5 className='text-danger  mb-4 text-center'> Email already exits</h5>)}

              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" name='passward' onChange={(e)=>setPassword(e.target.value)}  className="form-control form-control-lg"  />
                <label className="form-label txt-color" htmlFor="typePasswordX">Password</label>
                {(error4)&&(<h5 className='text-danger  mb-4 text-center'> Please enter passward....</h5>)}

              </div>
              <button className="btn btn-outline-light txt-color btn-lg mt-5 px-5" onClick={saverecord} type="submit">Sign In</button>
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

export default Signup;
