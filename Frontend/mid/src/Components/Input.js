import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Input = () => {

  const [name,setName]=useState("");
  const [quantity,setQuantity]=useState("");
  const [completed,setCompleted]=useState(false);
  const [error1,setError1]=useState(false);
  const [data, setData] = useState([]);
  const [error2,setError2]=useState(false);

  const navi=useNavigate();



 const getdata=async()=>{
    let result = await fetch("http://localhost:5000/getitem");
    result = await result.json();
    if(result)
    {
      setData(result);
    }
  
  }

  useEffect(()=>{
    getdata();
  },[])

  const save=async(e)=>{
    e.preventDefault();

    if(name )
    {
      setError1(false)
    }
    else{
      setError1(true)
    }
    if(quantity){
      setError2(false)
    }
    else{
      setError2(true)
    }
    if(name&&quantity)
    {
      let fdata=data.find(x=>x.name==name)
      console.log(" fadta: ",fdata);
      if(fdata)
      {
        alert(" Already in the grocery list ")
        navi("/home")
      }
      else{
      
        let result= await fetch("http://localhost:5000/item",{
          method: "Post",
          body: JSON.stringify({name,quantity,completed}),
          headers:{
            "Content-Type":"application/json",
          }
        })
        result =await result.json();
    
        navi("/home")
      }
     
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
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                        />
                          <p className='text-secondary text-center mb-0 fs-4 mt-1'>Name</p>
                          {(error1)&&(<h5 className='text-danger  mb-4 text-center'> Please enter name....</h5>)}

                      </div>
                      <div className="form-group m-2  mx-5">
                       
                        <input
                          onChange={(e)=>setQuantity(e.target.value)}
                          className="form-control form-control-lg"
                          type="text"
                          name="quantity"
                        />
                        <p className='text-secondary text-center mb-0 fs-4 mt-1'>Quantity</p>
                        {(error2)&&(<h5 className='text-danger mb-4 text-center'> Please enter quantity.....</h5>)}

                      </div>
                      
                      <div className="text-center mt-5">
                        <button 
                        onClick={save}
                        className="btn btn-lg w-25 me-5 btn-secondary">
                          Save  
                        </button>
                        <button 
                        onClick={()=>navi("/home")}
                        className="btn btn-lg ms-5 w-25 btn-secondary">
                          Discard
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
<br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Input
