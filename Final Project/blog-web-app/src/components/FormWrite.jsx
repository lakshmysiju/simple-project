import React from 'react';
import { useState,useEffect } from 'react';
import './FormWrite.css';
import data from '../data';


function FormWrite() {

  let UserInfo=localStorage.getItem("UserInfo")
  UserInfo=JSON.parse(UserInfo)

  const [bid,setBid]=useState({});
  const[userid,setUserid]=React.useState(UserInfo.uid);
  const [title, settitle] = useState({});
  const [authorName, setauthorName] = useState({});
  const [content, setcontent] = useState({});
  const [num,setNumber]=React.useState()
  const[like,setLike]=React.useState(0)
  const[likeduser,setLikeduser]=React.useState([])
  
console.log(data.username)
console.log(data.id)


useEffect(() => {
  fetch("http://localhost:8080/count")
  .then(res=>res.json())
  .then((result)=>{
    setNumber(result)
    setBid(()=>`BN-${(((num+1)+1000)+"").substring(1)}`)
    console.log(bid)
  
  })
}, [num]);

const handleSubmit=(event)=>{
let blog={bid,userid,title,authorName,content,time,like,likeduser}
console.log(blog)
event.preventDefault();
  alert("Blog added")

  fetch("http://localhost:8080/newBlog",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    })
    .then(()=>
    {console.log("Blog Added")
setNumber(num+1)
setBid(()=>`BN-${(((num+1)+1000)+"").substring(1)}`)
console.log(num)

  })
};
let time =new Date();



   return (
    <div className='div-form'>
      <form>
  <div className='form-group'>
    <h2>Create your blog here...</h2>
    <label for="title">Title </label><br></br>
    <input type="name" class="form-control" name='title'  placeholder="Enter Blog Title" 
    onChange={(e)=>{settitle(e.target.value)}}
    />
  </div><br></br>
  <div className='form-group'>
    <label for="name">Name </label><br></br>
    <input type="name" class="form-control" name='authorName'  placeholder="Enter your penName"
      onChange={(e)=>{setauthorName(e.target.value)}}
    />
 
   </div><br></br>
  
 
  <div className='form-group'>
    <label for="form-group">Blog content </label><br></br>
    <textarea class="form-control"name='content' rows="5"   onChange={(e)=>{setcontent(e.target.value)}}>
  
    </textarea>
  </div><br></br>

  

  <button
  className="button" onClick={handleSubmit}>Publish Post</button>
</form>
    </div>
  );
}

export default FormWrite;
