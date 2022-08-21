import React from 'react';
import {useState}  from 'react';

function Update() {
  let editBlog=localStorage.getItem("editBlog")
  editBlog=JSON.parse(editBlog)
  console.log(editBlog)

  let blogbid=editBlog.bid;
  let blogtitle=editBlog.title;
  let blogauthorN=editBlog.authorName;
  let blogcontent=editBlog.content;
console.log(editBlog.id)
  

  const [bid,setbid]=useState(blogbid);
  const [title, settitle] = useState(blogtitle);
  const [authorName, setauthorName] = useState(blogauthorN);
  const [content, setcontent] = useState(blogcontent);

 

const handleSubmit=(event)=>{
 let id=editBlog.id
  let bloge={bid,title,authorName,content}
  event.preventDefault();
  alert("Blog Updated")

  fetch(`http://localhost:8080/update/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(bloge)
    })
    .then(()=>
    {console.log("Blog Edited")
localStorage.removeItem("editBlog")

  })
};



  return (
    <div className='div-form'>
    <form>
<div className='form-group'>
  <h2>Edit your blog here...</h2>

  <label>BLOG ID</label><br></br>
  <input type="text" name="bid" className='form-control' placeholder='Enter Blog ID' value={bid}
   onChange={(e)=>{setbid(e.target.value)}}
  />
</div>
<div className='form-group'>
  <label for="title">Title </label><br></br>
  <input type="name" className='form-control' name='title'  placeholder="Enter Blog Title" value={title}
  onChange={(e)=>{settitle(e.target.value)}}
  />
</div><br></br>
<div className='form-group'>
  <label for="name">Name </label><br></br>
  <input type="name" class="form-control" name='authorName'  placeholder="Enter your penName" value={authorName}
    onChange={(e)=>{setauthorName(e.target.value)}}
  />

 </div><br></br>


<div className='form-group'>
  <label for="form-group">Blog content </label><br></br>
  <textarea class="form-control"name='content' rows="5" value={content}
    onChange={(e)=>{setcontent(e.target.value)}}>

  </textarea>
</div><br></br>



<button
className="button" onClick={handleSubmit}>Update</button>
</form>
  </div>
  );
}

export default Update;
