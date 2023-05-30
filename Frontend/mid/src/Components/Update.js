import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Update = () => {

    const {id}=useParams();

  const [name,setName]=useState("");
  const [quantity,setQuantity]=useState("");
  const [completed,setCompleted]=useState(false);
  const navi=useNavigate();

   const getData=async()=>{

    let result= await fetch(`http://localhost:5000/updateitem/${id}`)
    result=await result.json();
    console.log(result);
     setName(result.name);
     setQuantity(result.quantity)

   }


  useEffect(()=>{
    getData();
  },[])

  const save=async(e)=>{
    e.preventDefault();
let result= await fetch(`http://localhost:5000/putitem/${id}`,{
  method: "PUT",
  body: JSON.stringify({name,quantity}),
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

  return (
    <div>
       <div className="container" style={{height:"480px"}}>
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-3">
                <h1 className="text-secondary text-center fs-1 mb-3">List Item</h1>
              </div>
              <div className="card mb-5 shadow bg-body rounded" >
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group m-2 mx-5">
                      
                        <input
                          onChange={(e)=>setName(e.target.value)}
                          value={name}
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                        />
                          <p className='text-secondary text-center fs-4 mt-1'>Name</p>
                      </div>
                      <div className="form-group m-2  mx-5">
                       
                        <input
                          onChange={(e)=>setQuantity(e.target.value)}
                          value={quantity}
                          className="form-control form-control-lg"
                          type="text"
                          name="quantity"
                        />
                        <p className='text-secondary text-center fs-4 mt-1'>Quantity</p>

                      </div>
                      
                      <div className="text-center mt-5">
                        <button 
                        onClick={save}
                        className="btn btn-lg btn-secondary">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Update;
