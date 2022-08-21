import React from 'react';
import {useNavigate, Navigate} from 'react-router-dom';
import './ProfilePage.css';
import { useState,useEffect } from 'react';
import ViewBlog from './ViewBlog';



function BlogFeed() {
 
  const navigate=useNavigate();
  const [addBlog, setaddBlog] = useState([]);

  const fetchData=()=>{
      fetch("http://localhost:8080/gellAllBlogs").then(response=> response.json())
          .then((data)=>{
              let blog=data.results
              setaddBlog(data.map((data)=> {return <ViewBlog data={data} />}))
              console.log(data.id)
              console.log(data.id)
          })
      }
      useEffect(()=>{
          fetchData();
      },[])

      const profile=(event)=>{
        event.preventDefault();
        navigate('/user')

      }

  return (

    <div >
      <div className='pro-contanier'>

      <h2>Blog Feed</h2>
<button onClick={profile}>Profile

</button>
       

        
       

      
<div></div>
<div></div>
<div></div>

{addBlog}
<div></div>
</div>



    </div>

    
  );
}

export default BlogFeed;
