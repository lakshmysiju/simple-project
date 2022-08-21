import React from 'react';
import BlogDetails from './BlogDetails';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import data from '../data';
import './UserProfilepage.css'


function UserProfilePage() {



  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   };
   
  
 let UserInfo=localStorage.getItem("UserInfo");
 UserInfo=JSON.parse(UserInfo);

  const [addBlog, setaddBlog] = useState([]);

  const [a,setA]=React.useState([data.id,data.username,data.email,data.dateOfBirth,data.password])
  const [userd,setUserd]=React.useState(UserInfo)
console.log(a)

  const fetchData=()=>{
      fetch(`http://localhost:8080/blogs/${UserInfo.uid}`).then(response=> response.json())
          .then((data)=>{
              let blog=data.results
              setaddBlog(data.map((data)=> {return <BlogDetails data={data} />}))
              console.log(data.uid)
              console.log(data.uid)
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
      <Link to="/blogfeed">Home</Link>
      <div className='details'><b>{UserInfo.username}</b><br></br>
        {UserInfo.uid}<br></br>
        <button onClickCapture={logout}>logout user</button>
        </div>
  

        <h1 className='profile'>My profile</h1>
        


        <h3>My works</h3>
  

  <div></div>    
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

export default UserProfilePage;
