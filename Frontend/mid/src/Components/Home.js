import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const nav=useNavigate();
  const [data, setData] = useState([]);
  const [ decor, setDecor]=useState(false)
  
 


 const  complete=async(id)=>{



  let result= await fetch(`http://localhost:5000/updateitem/${id}`)
  result=await result.json();
  

 
  let  res= await fetch(`http://localhost:5000/putitem/${id}`,{
    method: "PUT",
    body: JSON.stringify({"completed":true}),
    headers:{
      "Content-Type":"Application/json"
    }
  })
     res=await res.json();

     getData();
    let al= window.confirm(" You buy it, Do you want to remove ")
    console.log(" alert : ",al);
    if(al)
    {
      deleteitem(id);
    }
    else{
      getData();
    }

 //
 // window.location.reload(false);
    //  if(res)
    //  {
    //   nav("/")
    //    window.location.reload(false);
    //  }

  }


  





  const getData = async () => {
    let result = await fetch("http://localhost:5000/getitem");
    result = await result.json();
    if(result)
    {

      console.log(" result in get data : ",result)
      setDecor(true)
    }
    else
    {
      
      getData();
      setDecor(false)
    }

    setData(result);
  
  
  };

  useEffect(() => {
    getData();
    console.log("in useeffect function")

  }, []);


  useEffect(() => {
    getData();
    console.log("in useeffect function")

  }, [data.length]);


const updateitem=(id)=>{
  nav(`/register/${id}`)
}




 const deleteitem =async(id)=>{
  let result=await fetch(`http://localhost:5000/delete/${id}`,{
    method: "delete"
  })
  result=await result.json();
  if(result)
  {
    getData();
   
  }
  else{
    getData();
  }

  
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-2 text-secondary"> Grocery List </h1>

         
        </div>

      

        <div className="row">
      {
        (decor)?(<> 
        
        {data.map((x) => {
          return (
            <div className="col-4 my-3">
              <div className="card hadow p-3 mb-2 bg-secondary" style={{ width: "400px" }}>
                <div className="card-body bg-light">
                  {(x.completed)?(<h5 className="card-title text-decoration-line-through mt-1 text-muted text-center text-uppercase fs-3">{x.name}</h5>):(<h5 className="card-title mt-1 text-muted text-center text-uppercase fs-3">{x.name}</h5>)}
                  <h6 className="card-subtitle m-1 mb-2 fs-5 text-center text-muted">
                   Quantity: {x.quantity}
                  </h6>

                 <button href="#"  onClick={()=>deleteitem(x._id)} className=" shadow p-3 mt-4 mx-4 mb-2 bg-secondary text-dark rounded  " style={{border:"2px solid black"}}>
                  <i class="fa-sharp fa-solid fa-trash fs-2"></i>
                  </button>

          
                  {(x.completed)? <button disabled href="#"  onClick={()=>updateitem(x._id)}   className=" shadow p-3 mx-3 mb-2 bg-secondary text-dark rounded  " style={{border:"2px solid black",opacity:"0.6"}}>
                  <i class="fa-solid fa-pencil fs-2"></i>
                  </button>:
                  (<button href="#"  onClick={()=>updateitem(x._id)}   className=" shadow p-3 mx-3 mb-2 bg-secondary text-dark rounded  " style={{border:"2px solid black"}}>
                  <i class="fa-solid fa-pencil fs-2"></i>
                  </button>)}


                  {(x.completed)?( <button href="#"  disabled  onClick={()=>complete(x._id)}    className=" shadow p-3 mx-4 mb-2 bg-secondary text-dark rounded  " style={{border:"2px solid black",opacity:"0.6"}}>
                  <i class="fa-sharp fa-solid fa-square-check fs-2"></i>
                  </button>):
                  (<button href="#"    onClick={()=>complete(x._id)}    className=" shadow p-3 mx-4 mb-2 bg-secondary text-dark rounded  " style={{border:"2px solid black"}}>
                  <i class="fa-sharp fa-solid fa-square-check fs-2"></i>
                  </button>)}
                </div>
              </div>
           
            </div>
          );
        })}
        
        </>):
        (
          <>
          <p className="text-muted fw-bold fs-2 text-center my-5" style={{opacity:"0.3",border:"5px solid grey",width:"700px",marginLeft:"300px"}} >Empty List........</p>
          </>
        )
      }
        

    
      </div>
     
      </div>


<div className="row">
<div className="col">

<Link
          to="/input"
          style={{
            border: "none",
            marginTop: "20px",
            marginBottom: "50px",
            backgroundColor: "white",
            position: "absolute",
            left: "1330px",
          }}
        >

          <i class="fa-solid fa-circle-plus text-secondary fs-1 "></i>
        </Link>


        <br/><br/><br/>

</div>

</div>


    </div>
  );
};

export default Home;
