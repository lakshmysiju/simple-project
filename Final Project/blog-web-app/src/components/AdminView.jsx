import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './ProfilePage.css';
import { useState,useEffect } from 'react';
import AdminViewdetails from './AdminViewdetails';



function AdminView() {
 
    const navigate=useNavigate();

  const [addBlog, setaddBlog] = useState([]);

  const fetchData=()=>{
      fetch("http://localhost:8080/gellAllBlogs").then(response=> response.json())
          .then((data)=>{
              let blog=data.results
              setaddBlog(data.map((data)=> {return <AdminViewdetails data={data} />}))
              console.log(data.id)
              console.log(data.id)
          })
      }
      useEffect(()=>{
          fetchData();
      },[])

      const Adminpro=(event)=>{
        event.preventDefault();
        navigate('/admin')
 
      }

  return (

    <div >
      <div className='pro-contanier'>

      <h2>Blog Feed</h2>
<button onClick={Adminpro}>Admin Profile

</button>
       

       
       

      
<div></div>
<div></div>
<div></div>

{addBlog}

</div>



    </div>

    
  );
}

export default AdminView;
