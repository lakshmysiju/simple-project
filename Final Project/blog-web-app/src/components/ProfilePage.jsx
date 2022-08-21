import React from 'react';
import {Link} from 'react-router-dom';
import './ProfilePage.css';
import { useState,useEffect } from 'react';
import BlogDetails from './BlogDetails';
import {useNavigate} from 'react-router-dom'



function ProfilePage() {

  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
   };
   
   let UserInfo=localStorage.getItem("UserInfo");
   UserInfo=JSON.parse(UserInfo);

  const [addBlog, setaddBlog] = useState([]);

  const fetchData=()=>{
      fetch("http://localhost:8080/gellAllBlogs").then(response=> response.json())
          .then((data)=>{
              let blog=data.results
              setaddBlog(data.map((data)=> {return <BlogDetails data={data} />}))
              console.log(data.id)
              console.log(data.id)
          })
      }
      useEffect(()=>{
          fetchData();
      },[])
      function logout(){
        localStorage.clear(UserInfo)
        
        navigate('/login')
      }

  return (

    <div >
      <div className='pro-contanier'>

        <Link to="/adminblog">Home</Link>
        <h1>Admin Page</h1>

        <button onClickCapture={logout}>logout user</button>

        <h3>Blogs</h3>
       

      
<div></div>
<div></div>
<div></div>

{addBlog}

</div>
<div>
  <button className='btn'onClick={handleSubmit}>
    <Link to="/useredit">
    Create new
    </Link></button>
</div>


    </div>

    
  );
}

export default ProfilePage;
