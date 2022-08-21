import React from 'react';
import {useNavigate} from 'react-router-dom';
import './BlogDetails.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function BlogDetails(props) {

  const navigate=useNavigate();
  let x=props.data


  const update=(event)=>{
    event.preventDefault();
    localStorage.setItem("editBlog",JSON.stringify(x))
    navigate("/update")
  }
  const del=(event)=>{ 
    event.preventDefault();
    
    fetch(`http://localhost:8080/delete/${props.data.id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
      })
      .then( ()=>{alert("Blog Deleted");props.fetchData()})
}


  return (
    <div>
      <div style={{ display: 'block', padding: 20 }}>
       <MDBCard>
      {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> */}
      <MDBCardBody>
        <MDBCardTitle><h2>{props.data.title}</h2></MDBCardTitle>
        <p className='card-text'>{props.data.bid}</p>
        <MDBCardText>{props.data.authorName}</MDBCardText>

        <MDBCardText>
        {props.data.content}
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
      {/* <div className='blog-temp'>
      <div className='card-group'>
  <div className='col-lg-4 mb-4'>
    <div class="card-body">
    <p className='card-text'>{props.data.bid}</p>

      <h3 className='card-title'>{props.data.title}</h3>
      <p className='card-text'><small className='text-muted'>{props.data.authorName}</small></p>
      <p className='card-text'>{props.data.content}</p>

    </div>
  </div>


</div>
      </div> */}
      <div>
        <button onClick={update}>Update</button>
        <button onClick={del}>Delete</button>
        
        </div>
      </div>

        



    </div>
  )
}

export default BlogDetails